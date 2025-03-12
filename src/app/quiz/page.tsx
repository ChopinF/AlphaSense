"use client";
import { motion } from "framer-motion";
import CompCard from "@/components/CompCard";
import InfoCard from "@/components/InfoCard";

export default function QuizPage() {
  const quizzes = [
    { title: "Cyrillic Alphabet", imageSrc: "/images/privet.svg", link: "/quiz/cyrillic", delay: 0.2 },
    { title: "Greek Alphabet", imageSrc: "/images/kalismera.svg", link: "/quiz/greek", delay: 0.4 },
    { title: "Arabic Alphabet", imageSrc: "/images/arab.svg", link: "/quiz/arabic", delay: 0.6 },
    { title: "Hangul Alphabet", imageSrc: "/images/korean.svg", link: "/quiz/hangul", delay: 0.8 },
    { title: "Hiragana Alphabet", imageSrc: "/images/hiragana.svg", link: "/quiz/hiragana", delay: 1.0 },
    { title: "Katakana Alphabet", imageSrc: "/images/katakana.svg", link: "/quiz/katakana", delay: 1.2 },
    { title: "Devanagari Alphabet", imageSrc: "/images/devanagari.svg", link: "/quiz/devanagari", delay: 1.4 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6  bg-gradient-to-b from-blue-50 to-blue-100 
      dark:from-gray-900 dark:to-gray-800">
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

      <div className="mb-12 flex justify-center">
        <InfoCard
          icon="🧠"
          title="Test Your Knowledge"
          description="Dive deep into different writing systems with our quizzes. Test your knowledge, improve your skills, and learn more about the alphabets!"
          bgColor="bg-blue-100"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {quizzes.map((quiz) => (
          <CompCard
            key={quiz.link}
            title={quiz.title}
            imageSrc={quiz.imageSrc}
            link={quiz.link}
            delay={quiz.delay}
          />
        ))}
      </div>
    </div>
  );
}
