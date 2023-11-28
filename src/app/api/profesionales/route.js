import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql';


export async function GET() {
    try {
        const results = await conn.query('select * from Profesionales')
        return NextResponse.json(results)
    } catch{
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}