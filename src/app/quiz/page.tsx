"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Explore Different Alphabets
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Dive into various writing systems and test your knowledge!
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Cyrillic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white text-center"
        >
          <Link href="/quiz/cyrillic">
            <motion.img
              src="/images/privet.svg"
              alt="Cyrillic Alphabet"
              className="mx-auto w-24 h-24 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-xl font-semibold">Cyrillic Alphabet</h3>
          </Link>
        </motion.div>

        {/* Greek */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white text-center"
        >
          <Link href="/quiz/greek">
            <motion.img
              src="/images/kalismera.svg"
              alt="Greek Alphabet"
              className="mx-auto w-24 h-24 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-xl font-semibold">Greek Alphabet</h3>
          </Link>
        </motion.div>

        {/* Arabic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white text-center"
        >
          <Link href="/quiz/arabic">
            <motion.img
              src="/images/arab.svg"
              alt="Arabic Alphabet"
              className="mx-auto w-24 h-24 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-xl font-semibold">Arabic Alphabet</h3>
          </Link>
        </motion.div>

        {/* Hangul */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white text-center"
        >
          <Link href="/quiz/hangul">
            <motion.img
              src="/images/korean.svg"
              alt="Hangul Alphabet"
              className="mx-auto w-24 h-24 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-xl font-semibold">Hangul Alphabet</h3>
          </Link>
        </motion.div>

        {/* Hiragana */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white text-center"
        >
          <Link href="/quiz/hiragana">
            <motion.img
              src="/images/hiragana.svg"
              alt="Hiragana Alphabet"
              className="mx-auto w-24 h-24 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-xl font-semibold">Hiragana Alphabet</h3>
          </Link>
        </motion.div>

        {/* Katakana */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white text-center"
        >
          <Link href="/quiz/katakana">
            <motion.img
              src="/images/katakana.svg"
              alt="Katakana Alphabet"
              className="mx-auto w-24 h-24 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-xl font-semibold">Katakana Alphabet</h3>
          </Link>
        </motion.div>

        {/* Devanagari */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white text-center"
        >
          <Link href="/quiz/devanagari">
            <motion.img
              src="/images/devanagari.svg"
              alt="Devanagari Alphabet"
              className="mx-auto w-24 h-24 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-xl font-semibold">Devanagari Alphabet</h3>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
