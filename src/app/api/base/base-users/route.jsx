import {promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
  const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", 'utf8');
  return NextResponse.json(JSON.parse(file));
}