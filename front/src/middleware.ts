import { NextResponse, NextRequest } from "next/server";
export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;
    if((pathname === "/dashboard" || pathname === "/dashboard/orders" || pathname === "/cart" )
        && !request.cookies.get("userSession")?.value) {
        const url = request.nextUrl.clone()
        url.pathname= "/login"
        return NextResponse.rewrite(url)
    } else { NextResponse.next();

    }
}