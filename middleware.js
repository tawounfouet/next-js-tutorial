// export function middleware(request) {
//     console.log("Hello World");  

import { NextResponse } from "next/server";

// }


// export function middleware(request) {
//     console.log("Hello World")
//     return Response.json({ msg: 'hello there' });
// }

export function middleware(request) {
    console.log("hello there")
    return NextResponse.redirect(new URL('/', request.url));
}
  
export const config = {
    // matcher: '/about',
    // matcher: ['/about/:path*', '/tasks/:path*']
    matcher: ['/about/:path*']
   
};

