"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-gray-800 px-6 py-4">

      <div className="flex justify-between items-center">

        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="logo"
    width={40}
    height={40}
  />
  <span className="text-xl font-bold text-blue-400">
    VareX Tech Solutions
  </span>
</Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-center bg-[#020617] p-4 rounded-lg">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      )}

    </nav>
  );
}