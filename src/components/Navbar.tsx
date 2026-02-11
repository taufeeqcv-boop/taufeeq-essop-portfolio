"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* LOGO SECTION */}
        <Link href="/" className="relative group">
          <div
            className={`transition-all duration-300 rounded-lg shadow-lg hover:shadow-[#10b981]/20 ${
              scrolled ? "bg-white/95" : "bg-white/90"
            } p-2`}
          >
            <Image
              src="/logo.jpg"
              alt="Taufeeq Essop - Financial Recovery Architect"
              width={200}
              height={60}
              className="h-12 w-auto object-contain mix-blend-multiply"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="text-gray-300 hover:text-[#10b981] transition-colors text-sm uppercase tracking-wider font-medium"
          >
            Home
          </Link>
          {["About", "Services", "Ventures", "Resume"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-[#10b981] transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#10b981] text-[#0f172a] px-5 py-2 rounded-full font-bold text-sm hover:bg-white transition-all"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] absolute w-full px-4 pt-4 pb-8 shadow-xl border-t border-gray-800">
          {["Home", "About", "Services", "Ventures", "Resume", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-300 hover:text-white border-b border-gray-800"
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
