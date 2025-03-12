"use client";
import Link from "next/link";

type DropdownProps = {
  label: string;
  items: { name: string; href: string }[];
  isOpen: string | null;
  setIsOpen: (value: string | null) => void;
};

export default function DropDown({ label, items, isOpen, setIsOpen }: DropdownProps) {
  return (
    <li className="relative">
      <button
        onClick={() => setIsOpen(isOpen === label ? null : label)}
        className="flex items-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {label}
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-300 ${isOpen === label ? "rotate-180" : ""}`}
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
      {isOpen === label && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          {items.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:delay-150"
                onClick={() => setIsOpen(null)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
