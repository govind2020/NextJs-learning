import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

// This api is not for dynamic routes it is only for static routes

export function GET(){
    const data = user;
    return NextResponse.json(data,{status:200})
}

export async function POST(request,response){
    const payload = await request.json()
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:'Required Field not Found' , success: false},{status:400})
    }
    return NextResponse.json({result:'New User Created' , success: true}, {status:201})
}