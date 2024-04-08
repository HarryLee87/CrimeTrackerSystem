"use client";

import Link from "next/link";

export default function Navigation() {
    return(
        <nav className="flexflex items-center justify-between border-b border-gray-200 p-4">
            <div className="flex flex-row">
                <div>
                    <Link className="justify-center items-center" href="/" >CrimeTracker</Link>
                </div>
            </div>
        </nav>
    )
}