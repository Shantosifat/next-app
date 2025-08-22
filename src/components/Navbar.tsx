"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      {/* Left: Logo */}
      <Link href="/" className="text-2xl font-bold tracking-wide hover:text-blue-400 transition">
        NextMart
      </Link>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:text-blue-400 transition ${
              pathname === item.href ? "text-blue-400 font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex items-center space-x-4">
        {session ? (
          <>
            <Link
              href="/dashboard/add-product"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Dashboard
            </Link>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-800 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
