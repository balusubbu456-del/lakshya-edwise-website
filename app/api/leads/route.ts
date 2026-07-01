import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const lead = await Lead.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Lead saved successfully",
        data: lead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const leads = await Lead.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: leads,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch leads",
      },
      { status: 500 }
    );
  }
}