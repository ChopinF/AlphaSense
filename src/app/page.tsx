"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="w-full max-w-lg flex flex-1 flex-col items-center justify-center">
        {/* Main Title Animation */}
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-blue-600">AlphaSense 🎓</span>
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p
          className="mt-2 text-lg text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Test your knowledge of alphabets and listening skills!
        </motion.p>

        {/* Quiz Navigation */}
        <motion.div
          className="mt-8 space-y-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/quiz">
            <Button variant="alb" className="w-48 py-3">
              Alphabet Quizzes
            </Button>
          </Link>

          <div className="mt-4 text-left text-lg text-gray-600">
          </div>

          <Link href="/hearing">
            <Button variant="alb" className="w-48 py-3">
              Hearing Quizzes
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

