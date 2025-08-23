"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Base navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Insert "Add Product" after Home if user is logged in
  const navItemsWithAdd = session
    ? [
        navItems[0],
        { name: "Add Product", href: "/dashboard/add-product" },
        ...navItems.slice(1),
      ]
    : navItems;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md relative">
      {/* Left: Logo */}
      <Link
        href="/"
        className="text-2xl font-bold tracking-wide hover:text-blue-400 transition"
      >
        NextMart
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6">
        {navItemsWithAdd.map((item) => (
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

      {/* Right: Auth Buttons (desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        {session ? (
          <button
            onClick={() => signOut()}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-800 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-6 md:hidden shadow-lg z-50">
          {navItemsWithAdd.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`hover:text-blue-400 transition ${
                pathname === item.href ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          {session ? (
            <button
              onClick={() => {
                signOut();
                setIsOpen(false);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-800 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
