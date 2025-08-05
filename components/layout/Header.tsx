import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icon library (optional)

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          JobSprint
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <Link href="/" className="hover:text-teal-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/jobs" className="hover:text-teal-400 transition">
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-teal-400 transition">
              About Us
            </Link>
          </li>
        </ul>

        {/* Post a Job button (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#"
            className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary-dark"
          >
            Post a Job
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <ul className="flex flex-col gap-4 text-sm pt-4">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/jobs" onClick={() => setIsOpen(false)} className="block">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)} className="block">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary-dark block text-center mt-2"
              >
                Post a Job
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
