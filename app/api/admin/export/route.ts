import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function GET() {
  await connectDB();

  const leads = await Lead.find().sort({ createdAt: -1 }).lean();

  const header = "Name,Phone,Country,Message,Status,Date\n";

  const rows = leads
    .map((lead: any) => {
      return [
        lead.name || "",
        lead.phone || "",
        lead.country || "",
        lead.message || "",
        lead.status || "New Lead",
        lead.createdAt
          ? new Date(lead.createdAt).toLocaleDateString("en-IN")
          : "",
      ]
        .map((value) => `"${String(value).replace(/"/g, '""')}"`)
        .join(",");
    })
    .join("\n");

  const csv = header + rows;

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=lakshya-leads.csv",
    },
  });
}