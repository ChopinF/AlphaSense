"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import DropDown from "../Dropdown";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const closeDropdowns = (event: MouseEvent) => {
      if (!(event.target as HTMLElement)?.closest("nav")) setDropdownOpen(null);
    }
    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  })

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap dark:text-white 
            transition-transform duration-500 ease-in-out transform hover:scale-110 ${poppins.className}`}
          >
            AlphaSense
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto mt-4 md:mt-0`}>
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">

            {/* Quiz Dropdown */}

            <DropDown label="Alphabet"
              items={[
                { name: "Cyrillic", href: "/quiz/cyrillic" },
                { name: "Greek", href: "/quiz/greek" },
                { name: "Hangul", href: "/quiz/hangul" },
                { name: "Hiragana", href: "/quiz/hiragana" },
                { name: "Katakana", href: "/quiz/katakana" },
                { name: "Arabic", href: "/quiz/arabic" },
                { name: "Devanagari", href: "/quiz/devanagari" },
              ]}
              isOpen={dropdownOpen}
              setIsOpen={setDropdownOpen} />

            {/* Hearing Dropdown */}
            <DropDown label="Hearing"
              items={[
                { name: "Cyrillic", href: "/hearing/cyrillic" },
                { name: "Greek", href: "/hearing/greek" },
                { name: "Hangul", href: "/hearing/hangul" },
                { name: "Hiragana", href: "/hearing/hiragana" },
                { name: "Katakana", href: "/hearing/katakana" },
                { name: "Arabic", href: "/hearing/arabic" },
                { name: "Devanagari", href: "/hearing/devanagari" },
              ]}
              isOpen={dropdownOpen}
              setIsOpen={setDropdownOpen} />
          </ul>
        </div>
      </div>
    </nav>
  );
}
