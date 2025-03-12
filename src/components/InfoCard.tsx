"use client";

import { motion } from "framer-motion"

type Props = {
  icon: string, title: string, description: string, bgColor: string
}
export default function InfoCard({ icon, title, description, bgColor }: Props) {
  return (
    < motion.div
      initial={{ opacity: 0, y: -30 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-6 bg-white p-6 rounded-xl shadow-xl ${bgColor} dark:bg-gray-800 dark:text-white`}
    >
      <div className="p-4 rounded-full bg-white shadow-md animate-pulse">
        <span className="text-4xl text-gray-700 dark:text-gray-200">{icon}</span>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </div>
    </motion.div >
  );
}
