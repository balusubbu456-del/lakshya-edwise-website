"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="mb-2 block font-medium text-gray-700">
        Password
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name="password"
          placeholder="Enter password"
          required
          className="w-full rounded-lg border px-4 py-3 pr-12 text-slate-900 placeholder:text-gray-400 outline-none focus:border-blue-600"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
        >
          {show ? <EyeOff size={22} /> : <Eye size={22} />}
        </button>
      </div>
    </div>
  );
}