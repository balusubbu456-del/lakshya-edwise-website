"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLogin(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === adminUsername && password === adminPassword) {
    const cookieStore = await cookies();

    cookieStore.set("admin-auth", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    redirect("/admin");
  }

  redirect("/admin/login?error=invalid");
}

export async function adminLogout() {
  const cookieStore = await cookies();

  cookieStore.delete("admin-auth");

  redirect("/admin/login");
}