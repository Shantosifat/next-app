"use client";

import { SessionProvider } from "next-auth/react";
import { Navbar } from "./Navbar";

export function NavbarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
    </SessionProvider>
  );
}
