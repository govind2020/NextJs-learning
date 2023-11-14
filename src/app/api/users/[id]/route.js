import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

// this file for dynamic routes behafe of Id

export function GET(request, response){
    const data = user.filter((item)=>item.id == response.params.id )
    return NextResponse.json(data.length==0?{result: 'No Data Found',success:false}:{result:data[0],status:200, success:true})
}

export async function PUT(request,content){
    const payload = await request.json();
    payload.id = content.params.id;
    console.log(payload)
    if(!payload.id || !payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"Data is not Valid", success:false},{status:400})
    }
    return NextResponse.json({result:payload, success:true},{status:201})
}

export function DELETE(request,content){
    let id = content.params.id;
    if(id){
        return NextResponse.json({result:"User deleted", success:true},{status:200})
    }else{
        return NextResponse.json({result:"Internal Error , Please try after some Time", success:false},{status:400})
    }


}
