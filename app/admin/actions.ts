"use server";

import connectDB from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { revalidatePath } from "next/cache";

export async function updateLeadStatus(formData: FormData) {
  const id = formData.get("id") as string;
  const status = formData.get("status") as string;

  await connectDB();

  await Lead.findByIdAndUpdate(id, {
    $set: { status },
  });

  revalidatePath("/admin", "page");
}

export async function deleteLead(formData: FormData) {
  const id = formData.get("id") as string;

  await connectDB();

  await Lead.findByIdAndDelete(id);

  revalidatePath("/admin", "page");
}