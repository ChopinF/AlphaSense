"use client";
import { motion } from "framer-motion";
import CompCard from "@/components/CompCard";
import InfoCard from "@/components/InfoCard";


export default function ExtractPage() {
  const extracts = [
    { title: "English", imageSrc: "/images/eng.svg", link: "/extract/english", delay: 0.0 },
    { title: "Cyrillic Alphabet", imageSrc: "/images/privet.svg", link: "/extract/cyrillic", delay: 0.2 },
    { title: "Greek Alphabet", imageSrc: "/images/kalismera.svg", link: "/extract/greek", delay: 0.4 },
    { title: "Arabic Alphabet", imageSrc: "/images/arab.svg", link: "/extract/arabic", delay: 0.6 },
    { title: "Hangul Alphabet", imageSrc: "/images/korean.svg", link: "/extract/hangul", delay: 0.8 },
    { title: "Japanese Alphabets", imageSrc: "/images/hiragana.svg", link: "/extract/japanese", delay: 1.0 },
    { title: "Devanagari Alphabet", imageSrc: "/images/devanagari.svg", link: "/extract/devanagari", delay: 1.4 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex flex-col text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Extract text from different alphabets
      </h1>

      <p className="mb-8 text-gray-500 dark:text-gray-400 text-lg">
        Want to <b>extract text</b> from images? It is super easy! 🚀 Just follow these simple steps:
      </p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <InfoCard
          icon="📤"
          title="Upload images"
          description="Upload images from your device using the 'Upload Image' button."
          bgColor="bg-blue-100"
        />
        <InfoCard
          icon="🔍"
          title="Extract Text"
          description="Click 'Extract Text' to process them with OCR (Optical Character Recognition)."
          bgColor="bg-green-100"
        />
        <InfoCard
          icon="📄"
          title="View Extracted Text"
          description="The extracted text will appear in the text area, ready for copying or editing."
          bgColor="bg-yellow-100"
        />
        <InfoCard
          icon="🗑"
          title="Remove Images"
          description="Need to make changes? You can remove individual images or clear all anytime."
          bgColor="bg-red-100"
        />
      </div>


      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Dive into various writing systems and gain more knowledge!
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {extracts.map((quiz) => (
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

