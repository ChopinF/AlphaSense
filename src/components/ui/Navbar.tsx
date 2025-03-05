"use client";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isHearingOpen, setIsHearingOpen] = useState(false);

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
            <li className="relative">
              <button
                onClick={() => {
                  setIsQuizOpen(!isQuizOpen);
                  if (isHearingOpen)
                    setIsHearingOpen(!isHearingOpen);
                }}
                className="flex items-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Alphabet
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300"
                  style={{ transform: isQuizOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Content */}
              {isQuizOpen && (

                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <li>
                    <Link
                      href="/quiz/cyrillic"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => { setIsQuizOpen(!isQuizOpen) }}
                    >
                      Cyrillic
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/quiz/greek"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsQuizOpen(!isQuizOpen)}
                    >
                      Greek
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/quiz/hangul"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsQuizOpen(!isQuizOpen)}
                    >
                      Hangul
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/quiz/hiragana"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsQuizOpen(!isQuizOpen)}
                    >
                      Hiragana
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/quiz/katakana"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsQuizOpen(!isQuizOpen)}
                    >
                      Katakana
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/quiz/arabic"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsQuizOpen(!isQuizOpen)}
                    >
                      Arabic
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/quiz/devanagari"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsQuizOpen(!isQuizOpen)}
                    >
                      Devanagari
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Hearing Dropdown */}
            <li className="relative">
              <button
                onClick={() => {
                  setIsHearingOpen(!isHearingOpen)
                  if (isQuizOpen) setIsQuizOpen(!isQuizOpen)
                }}
                className="flex items-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Hearing
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300"
                  style={{ transform: isHearingOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isHearingOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <li>
                    <Link
                      href="/hearing/cyrillic"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsHearingOpen(!isHearingOpen)}
                    >
                      Cyrillic
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/hearing/greek"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsHearingOpen(!isHearingOpen)}
                    >
                      Greek
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/hearing/hangul"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsHearingOpen(!isHearingOpen)}
                    >
                      Hangul
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/hearing/hiragana"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsHearingOpen(!isHearingOpen)}
                    >
                      Hiragana
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/hearing/katakana"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsHearingOpen(!isHearingOpen)}
                    >
                      Katakana
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/hearing/arabic"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsHearingOpen(!isHearingOpen)}
                    >
                      Arabic
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/hearing/devanagari"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setIsHearingOpen(!isHearingOpen)}
                    >
                      Devanagari
                    </Link>
                  </li>
                </ul>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
