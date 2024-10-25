import MainType from "@/models/MainTyps";
import ConnectDB from "@/utils/ConnectDB";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await ConnectDB()

        const data = await MainType.find();

        if (data) {
            return NextResponse.json({ data: data }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Unable to fetch" }, { status: 405 })
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

