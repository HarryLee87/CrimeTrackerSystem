"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 p-4">
      <div className="ml-4 text-xl text-cyan-600">
        <Link className="justify-center items-center" href="/">
          CrimeTracker
        </Link>
      </div>
      <div className="flex flex-1 justify-center items-center gap-4">
        <Link href="/map" className="bg-yellow-500 border-2 border-stone-800 p-2 rounded-lg w-32 text-center font-semibold focus:bg-teal-700">Map</Link>
        <Link href="/statistics" className="bg-yellow-500 border-2 border-stone-800 p-2 rounded-lg w-32 text-center font-semibold focus:bg-teal-700">Statistics</Link>
      </div>
      <div className="flex mr-4 w-1/6">
        <Link href="/auth/signin" className="text-blue-400 bg-amber-200 w-full text-center border-2 border-red-900 p-2 rounded-lg font-bold">Sign In</Link>
      </div>
    </nav>
  );
}
