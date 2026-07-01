import { adminLogin } from "./actions";

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-slate-900">
          Admin Login
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Lakshya International Edwise
        </p>

        {searchParams?.error === "invalid" && (
          <p className="mb-4 rounded-lg bg-red-100 p-3 text-center text-red-700">
            Invalid username or password
          </p>
        )}

        <form action={adminLogin} className="space-y-5">
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              required
              className="w-full rounded-lg border px-4 py-3 text-slate-900 placeholder:text-gray-400 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              className="w-full rounded-lg border px-4 py-3 text-slate-900 placeholder:text-gray-400 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}