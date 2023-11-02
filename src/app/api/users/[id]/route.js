import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request, response){
    const data = user.filter((item)=>item.id == response.params.id )
    return NextResponse.json(data.length==0?{result: 'No Data Found',success:false}:{result:data[0],status:200, success:true})
}