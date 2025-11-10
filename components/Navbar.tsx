"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight">ASPCT</div>

        <nav className="hidden md:flex gap-6 text-gray-700 text-sm">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#shop" className="hover:text-black transition">Shop</a>
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <input placeholder="Cari produk..." className="border rounded px-3 py-1 text-sm w-48" />
          <button className="px-3 py-1 rounded bg-black text-white text-sm hover:bg-gray-800 transition">Cart (0)</button>
        </div>

        <button className="md:hidden text-2xl text-gray-800" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-inner border-t">
          <nav className="flex flex-col px-4 py-3 gap-2 text-gray-700 text-sm">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#shop" className="hover:text-black">Shop</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
