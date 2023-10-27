import {promise as fs} from "fs/promises";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const file = await fs.readFile(process.cwd() + `/src/app/api/base/db.json`, 'utf-8');
    return NextResponse.json(JSON.parse(file));
}