import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const session = request.cookies.get('session');

    const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');

    if (!session && isDashboard) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}
