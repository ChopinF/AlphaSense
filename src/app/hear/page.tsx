"use client";
import { motion } from "framer-motion";
import CompCard from "@/components/CompCard";
import InfoCard from "@/components/InfoCard";

export default function HearingPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Explore Hearing Quizzes
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Dive into various writing systems and test your hearing!
        </p>
      </motion.div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <InfoCard
          icon="🎧"
          title="Test Your Hearing"
          description="Challenge yourself with various quizzes designed to improve your recognition of different sounds!"
          bgColor="bg-blue-100"
        />
        <InfoCard
          icon="📝"
          title="Track Progress"
          description="Keep track of your quiz results and improve your hearing comprehension over time."
          bgColor="bg-green-100"
        />
        <InfoCard
          icon="🔊"
          title="Multiple Languages"
          description="Test your hearing with quizzes for different languages and alphabets."
          bgColor="bg-yellow-100"
        />
      </div>

      {/* Quizzes Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <CompCard title="Cyrillic Hearing Quiz" imageSrc="/images/privet.svg" link="/hear/cyrillic" delay={0.2} />
        <CompCard title="Greek Hearing Quiz" imageSrc="/images/kalismera.svg" link="/hear/greek" delay={0.4} />
        <CompCard title="Arabic Hearing Quiz" imageSrc="/images/arab.svg" link="/hear/arabic" delay={0.6} />
        <CompCard title="Hangul Hearing Quiz" imageSrc="/images/korean.svg" link="/hear/hangul" delay={0.8} />
        <CompCard title="Hiragana Hearing Quiz" imageSrc="/images/hiragana.svg" link="/hear/hiragana" delay={1.0} />
        <CompCard title="Katakana Hearing Quiz" imageSrc="/images/katakana.svg" link="/hear/katakana" delay={1.2} />
        <CompCard title="Devanagari Hearing Quiz" imageSrc="/images/devanagari.svg" link="/hear/devanagari" delay={1.4} />
      </div>
    </div>
  );
}
