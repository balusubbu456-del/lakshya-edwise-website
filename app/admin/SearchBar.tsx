"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams();

    if (search) params.set("search", search);
    if (status) params.set("status", status);

    router.push(`/admin?${params.toString()}`);
  }

  function resetSearch() {
    setSearch("");
    setStatus("");
    router.push("/admin");
  }

  return (
    <form
      onSubmit={handleSearch}
      className="mb-6 grid grid-cols-1 gap-4 rounded-xl bg-white p-4 shadow md:grid-cols-4"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search name / phone / country"
        className="rounded-lg border px-4 py-3 text-slate-900 outline-none focus:border-blue-600"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-lg border px-4 py-3 text-slate-900 outline-none focus:border-blue-600"
      >
        <option value="">All Status</option>
        <option value="New Lead">New Lead</option>
        <option value="Contacted">Contacted</option>
        <option value="In Progress">In Progress</option>
        <option value="Admission Done">Admission Done</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Search
      </button>

      <button
        type="button"
        onClick={resetSearch}
        className="rounded-lg bg-gray-700 px-5 py-3 font-semibold text-white hover:bg-gray-800"
      >
        Reset
      </button>
    </form>
  );
}