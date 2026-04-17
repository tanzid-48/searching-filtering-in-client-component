"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';


const links = [
  { label: "Home",     href: "/" },
  { label: "Products", href: "/products" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

const Navbar = () => {

    const [open, setOpen] = useState(false);
  const pathname        = usePathname();


    return (
        <nav className="border-b bg-white px-6 py-3">

      {/* Top row */}
      <div className="flex items-center justify-between max-w-5xl mx-auto">

        {/* Logo */}
        <Link href="/" className="font-semibold text-lg text-gray-900">
          MyApp
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition ${
                pathname === link.href
                  ? "text-blue-600 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-gray-700" />
          <span className="block w-5 h-0.5 bg-gray-700" />
          <span className="block w-5 h-0.5 bg-gray-700" />
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-3 max-w-5xl mx-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm py-1 ${
                pathname === link.href
                  ? "text-blue-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

    </nav>
    );
};

export default Navbar;