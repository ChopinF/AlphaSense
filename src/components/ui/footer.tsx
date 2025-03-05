"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100  border-gray-200 dark:bg-gray-800 dark:border-gray-100 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <span
          className="text-xl font-semibold dark:text-white transition-transform duration-500 ease-in-out transform hover:scale-110"
        >
          Next.js & Tailwind
        </span>

        <div className="flex justify-center items-center space-x-6 py-5">
          <a
            href="https://github.com/ChopinF"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="/svgs/github.svg"
              alt="GitHub"
              className="w-8 h-8 transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a
            href="https://www.instagram.com/lazar_alexandru_303"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/svgs/insta.svg"
              alt="Instagram"
              className="w-8 h-8 transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandru-lazar-715b4b212/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="/svgs/linkedin.svg"
              alt="LinkedIn"
              className="w-8 h-8 transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>

        {/* Footer Copyright */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} Lazar Alexandru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
