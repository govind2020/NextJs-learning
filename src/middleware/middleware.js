import { NextResponse } from "next/server"

export function middleware(request){
//    if(request.nextUrl.pathname != '/login'){
    return NextResponse.redirect(new URL('/login', request.nextUrl));   
// }
}

// it will specific this route to login by using config
export const config={
    matcher:["/about/:path*" , "/studentList/:path*"]
}