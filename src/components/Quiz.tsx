"use client";
import { useMemo, useEffect, useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import ListAlphabet from "./ListAlphabet";
import { shuffleArray } from "@/lib/shuffle";

type Letter = {
  symbol?: string;
  english: string;
}

//HEREtoadd : if you want to add a new alphabet just make a .ts file in the src/lib file the same as previouses and then
//come here and add it
//then you need to make a directory in the quiz/app.tsx with just the Quiz component
type Language = {
  cyrillic?: string;
  greek?: string;
  hangul?: string;
  hiragana?: string;
  katakana?: string;
  arabic?: string;
  devanagari?: string;
}

type QuizProps = {
  letters: Letter[];
  title: string;
  language: keyof Language;
}

export default function Quiz({ letters, title, language }: QuizProps) {

  useEffect(() => {
    const fonts = {
      hangul: "Gugi",
      hiragana: "Noto Sans JP",
      katakana: "Noto Sans JP",
      cyrillic: "Roboto",
      greek: "Noto Serif",
      arabic: "Amiri, sans-serif",
      devanagari: "Noto Sans Devanagari, sans-serif",
    };
    const fontToLoad = fonts[language] || "Arial";

    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${fontToLoad.replace(
      / /g,
      "+"
    )}&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, [language]);

  const [current, setCurrent] = useState(letters[Math.floor(Math.random() * letters.length)]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const shuffledLetters = useMemo(() => shuffleArray(letters), [letters]);


  const checkAnswer = () => {
    if (isDisabled) return;
    setIsDisabled(true);

    const isCorrect = input.toLowerCase() === current.english.toLowerCase();

    if (isCorrect) {
      setMessage("✅ Correct!");
      setStatus("correct");
      setScore(score + 1);
    } else {
      setMessage(`❌ Incorrect! The correct answer is: ${current.english}`);
      setStatus("incorrect");
    }
    setAttempts(attempts + 1);
    setTimeout(() => {
      setCurrent(letters[Math.floor(Math.random() * letters.length)]);
      setInput("");
      setMessage("");
      setStatus("");
      setIsDisabled(false);
    }, 1500);
  };

  return (
    <div>
      {/* Centered Section */}
      <section className="container mx-auto mt-10 flex flex-col items-center text-center">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <div
          className={`mt-6 text-8xl font-bold p-6 rounded-lg transition-all duration-500 
            ${status === "correct" ? "bg-green-800"
              : status === "incorrect" ? "bg-red-800" : "bg-gray-800 text-white"
            }`}
          style={{ fontFamily: "Noto Sans JP, Gugi, sans-serif" }}
        >
          {current.symbol}
        </div>

        <Input
          type="text"
          placeholder="Enter English equivalent"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
          className="mt-4 w-64"
        />
        <br />

        <Button onClick={checkAnswer} variant="negru" className="mt-4" disabled={isDisabled}>
          Submit
        </Button>

        <p className="mt-4 text-lg font-semibold">{message}</p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            ✅ Score: <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{score}</span>
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            🎯 Accuracy:
            <span className="ml-1 text-2xl font-bold text-green-600 dark:text-green-400">
              {attempts > 0 ? ((score / attempts) * 100).toFixed(1) + "%" : "0%"}
            </span>
          </p>
        </div>
      </section>

      <ListAlphabet letters={shuffledLetters} language={language} />

    </div>
  );
}
