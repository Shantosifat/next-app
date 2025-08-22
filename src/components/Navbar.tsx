"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between px-6 py-4 bg-gray-900 text-white">
      <Link href="/">NextMart</Link>
      <div className="space-x-4">
        <Link href="/products">Products</Link>
        {session ? (
          <>
            <Link href="/dashboard/add-product">Dashboard</Link>
            <button onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
