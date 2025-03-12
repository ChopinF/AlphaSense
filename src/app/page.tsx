"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-blue-100 
      dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-lg flex flex-1 flex-col items-center justify-center">

        <motion.h1
          className="text-4xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-blue-600 dark:text-blue-400">AlphaSense 🎓</span>
        </motion.h1>

        <motion.p
          className="mt-2 text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Test your knowledge of alphabets and listening skills!
        </motion.p>

        {/* Quiz Navigation */}
        <motion.div
          className="mt-8 space-y-4 flex flex-col items-center w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/quiz">
            <Button
              variant="alb"
              className="w-56 py-3 text-lg font-semibold flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg"
            >
              📖 Alphabet Quizzes
            </Button>
          </Link>

          <Link href="/hear">
            <Button
              variant="alb"
              className="w-56 py-3 text-lg font-semibold flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
            >
              🎧 Hearing Quizzes
            </Button>
          </Link>

          <Link href="/extract">
            <Button
              variant="alb"
              className="w-56 py-3 text-lg font-semibold flex items-center justify-center gap-3 bg-purple-500 hover:bg-purple-600 transition-all transform hover:scale-105 shadow-lg"
            >
              📝 Extract Text
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
