"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  imageSrc: string;
  link: string;
  delay: number;
}

export default function CompCard({ title, imageSrc, link, delay }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white text-center"
    >
      <Link href={link}>
        <motion.img
          src={imageSrc}
          alt={`${title} Quiz`}
          className="mx-auto w-24 h-24 mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <h3 className="text-xl font-semibold">{title}</h3>
      </Link>
    </motion.div>
  );
}
