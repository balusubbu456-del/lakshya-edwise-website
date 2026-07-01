import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import connectDB from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { updateLeadStatus, deleteLead } from "./actions";
import { adminLogout } from "./login/actions";
import SearchBar from "./SearchBar";

export const dynamic = "force-dynamic";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    status?: string;
  }>;
}) {
  const params = await searchParams;

  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("admin-auth")?.value === "true";

  if (!isLoggedIn) redirect("/admin/login");

  await connectDB();

  const search = params.search ?? "";
  const status = params.status ?? "";

  const query: any = {};

  if (search.trim()) {
    query.$or = [
      { name: { $regex: search.trim(), $options: "i" } },
      { phone: { $regex: search.trim(), $options: "i" } },
      { country: { $regex: search.trim(), $options: "i" } },
    ];
  }

  if (status.trim()) {
    query.status = status.trim();
  }

  const leads = JSON.parse(
    JSON.stringify(await Lead.find(query).sort({ createdAt: -1 }).lean())
  );

  const allLeads = JSON.parse(JSON.stringify(await Lead.find().lean()));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const totalLeads = allLeads.length;

  const todayLeads = allLeads.filter(
    (lead: any) => new Date(lead.createdAt) >= today
  ).length;

  const pendingLeads = allLeads.filter(
    (lead: any) => (lead.status || "New Lead") === "New Lead"
  ).length;

  const contactedLeads = allLeads.filter(
    (lead: any) => lead.status === "Contacted"
  ).length;

  const progressLeads = allLeads.filter(
    (lead: any) => lead.status === "In Progress"
  ).length;

  const admissionDone = allLeads.filter(
    (lead: any) => lead.status === "Admission Done"
  ).length;

  const rejectedLeads = allLeads.filter(
    (lead: any) => lead.status === "Rejected"
  ).length;

  const maxCount = Math.max(
    pendingLeads,
    contactedLeads,
    progressLeads,
    admissionDone,
    rejectedLeads,
    1
  );

const countries = allLeads.reduce((acc: any, lead: any) => {
  const country = (lead.country || "Not Specified")
    .trim()
    .toLowerCase();

  const formatted =
    country.charAt(0).toUpperCase() + country.slice(1);

  acc[formatted] = (acc[formatted] || 0) + 1;

  return acc;
}, {});

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-slate-900">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Lakshya Admin Dashboard</h1>

        <div className="flex gap-3">
          <a
            href="/api/admin/export"
            className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
          >
            Export Excel
          </a>

          <form action={adminLogout}>
            <button
              type="submit"
              className="rounded-lg bg-slate-900 px-5 py-2 text-white hover:bg-slate-700"
            >
              Logout
            </button>
          </form>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-600">Total Leads</h2>
          <p className="mt-3 text-5xl font-bold text-blue-600">{totalLeads}</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-600">
            Today&apos;s Leads
          </h2>
          <p className="mt-3 text-5xl font-bold text-green-600">
            {todayLeads}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-600">
            Pending Leads
          </h2>
          <p className="mt-3 text-5xl font-bold text-red-600">
            {pendingLeads}
          </p>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-5 text-2xl font-semibold">Lead Status Overview</h2>

          {[
            ["New Lead", pendingLeads, "bg-red-500"],
            ["Contacted", contactedLeads, "bg-blue-500"],
            ["In Progress", progressLeads, "bg-yellow-500"],
            ["Admission Done", admissionDone, "bg-green-500"],
            ["Rejected", rejectedLeads, "bg-gray-500"],
          ].map(([label, count, color]: any) => (
            <div key={label} className="mb-4">
              <div className="mb-1 flex justify-between text-sm font-semibold">
                <span>{label}</span>
                <span>{count}</span>
              </div>

              <div className="h-3 rounded-full bg-gray-200">
                <div
                  className={`h-3 rounded-full ${color}`}
                  style={{ width: `${(count / maxCount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-5 text-2xl font-semibold">Country-wise Leads</h2>

          {Object.keys(countries).length === 0 ? (
            <p className="text-gray-500">No country data yet</p>
          ) : (
            Object.entries(countries).map(([country, count]: any) => (
              <div key={country} className="mb-4">
                <div className="mb-1 flex justify-between text-sm font-semibold">
                  <span>{country}</span>
                  <span>{count}</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full bg-indigo-500"
                    style={{ width: `${(count / totalLeads) * 100}%` }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <SearchBar />

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-6 text-2xl font-semibold">Recent Leads</h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Country</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Quick Actions</th>
                <th className="p-3 text-left">Delete</th>
              </tr>
            </thead>

            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-5 text-center text-gray-500">
                    No Leads Found
                  </td>
                </tr>
              ) : (
                leads.map((lead: any) => (
                  <tr key={`${lead._id}-${lead.status}`} className="border-t">
                    <td className="p-3">{lead.name}</td>
                    <td className="p-3">{lead.phone}</td>
                    <td className="p-3">{lead.country || "-"}</td>
                    <td className="p-3">{lead.message || "-"}</td>

                    <td className="p-3">
                      <form action={updateLeadStatus} className="flex gap-2">
                        <input type="hidden" name="id" value={lead._id} />

                        <select
                          name="status"
                          defaultValue={lead.status || "New Lead"}
                          className="rounded-lg border px-3 py-2"
                        >
                          <option value="New Lead">New Lead</option>
                          <option value="Contacted">Contacted</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Admission Done">Admission Done</option>
                          <option value="Rejected">Rejected</option>
                        </select>

                        <button
                          type="submit"
                          className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                        >
                          Save
                        </button>
                      </form>
                    </td>

                    <td className="p-3">
                      {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                    </td>

                    <td className="p-3">
                      <div className="flex gap-2">
                        <a
                          href={`tel:${lead.phone}`}
                          className="rounded-lg bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
                        >
                          Call
                        </a>

                        <a
                          href={`https://wa.me/91${lead.phone}?text=Hello ${lead.name}, we received your enquiry from Lakshya International Edwise.`}
                          target="_blank"
                          className="rounded-lg bg-green-600 px-3 py-2 text-white hover:bg-green-700"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </td>

                    <td className="p-3">
                      <form action={deleteLead}>
                        <input type="hidden" name="id" value={lead._id} />

                        <button
                          type="submit"
                          className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}