// "use client";

import db from "@/lib/db";
import getSession from "@/lib/session";
import Link from "next/link";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    return user;
  }
}

export default async function Navigation() {
  const user = await getUser();
  const logOut = async () => {
    "use server";
    const session = await getSession();
    await session.destroy();
  };
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 p-4">
      <div className="ml-4 text-xl text-cyan-600">
        <Link className="justify-center items-center" href="/">
          CrimeTracker
        </Link>
      </div>
      <div className="flex flex-1 justify-center items-center gap-4">
        <Link
          href="/map"
          className="bg-yellow-500 border-2 border-stone-800 p-2 rounded-lg w-32 text-center font-semibold focus:bg-teal-700"
        >
          Map
        </Link>
        <Link
          href="/statistics"
          className="bg-yellow-500 border-2 border-stone-800 p-2 rounded-lg w-32 text-center font-semibold focus:bg-teal-700"
        >
          Statistics
        </Link>
      </div>
      <form action={logOut} className="flex flex-row justify-center items-center w-1/4">
        {user ? (
          <div className="flex flex-row gap-1  justify-center items-center ">
            <p className="text-lg font-semibold w-full">
              Hello, {user.username}!
            </p>
            <button className="text-blue-400 bg-amber-200 w-full text-center border-2 border-red-900 p-2 rounded-lg font-bold">
              Log Out
            </button>
          </div>
        ) : (
          <Link
            href="/auth/signin"
            className="text-blue-400 bg-amber-200 w-1/2 text-center border-2 border-red-900 p-2 rounded-lg font-bold"
          >
            Sign In
          </Link>
        )}
      </form>
    </nav>
  );
}
