import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
    </footer>
  );
}
