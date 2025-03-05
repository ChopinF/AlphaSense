"use client";
import { useEffect, useState } from "react";
import ListAlphabet from "./ListAlphabet";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";

type Letter = {
  symbol?: string;
  english: string;
  sound_path?: string;
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

export default function HearingQuiz({ letters, title, language }: QuizProps) {
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
  const [options, setOptions] = useState<Letter[]>([]);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState("");
  const [autoPlay, setAutoPlay] = useState(false);


  useEffect(() => {
    const shuffled = [...letters]
      .filter((letter) => letter.symbol !== current.symbol) // remove the current letter
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    setOptions([current, ...shuffled].sort(() => 0.5 - Math.random()));
  }, [current, letters]);

  useEffect(() => {
    if (autoPlay && current.sound_path) {
      const audio = new Audio(current.sound_path);
      audio.play();
    }
  }, [current, autoPlay]); // runs whenever `current` changes


  const playSoundCurrent = () => {
    const audio = new Audio(current.sound_path)

    audio.play();
  }

  const checkAnswer = (selected: Letter) => {
    if (selected.english === current.english) {
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
      setMessage("");
      setStatus("");
    }, 1500);
  };

  return (
    <div>
      <section className="container mx-auto mt-10 flex flex-col items-center text-center">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        {/* Letter Display with Speaker Button */}

        <Button onClick={playSoundCurrent} variant="outline" className="mt-4 flex items-center p-6">
          <Volume2 className="mr-3 w-10 h-10" /> Listen
        </Button>

        <Button
          onClick={() => setAutoPlay(!autoPlay)}
          variant="outline"
          className={`mt-4 px-3 py-2 text-md font-semibold ${autoPlay ? "bg-green-700" : "bg-gray-700"}`}
        >
          {autoPlay ? "🔊 Auto Hearing: ON" : "🔇 Auto Hearing: OFF"}
        </Button>

        {/* Multiple-choice options */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {options.map((option) => (
            <button
              key={option.english}
              className={`p-4 border rounded-lg text-lg font-bold transition-all 
                ${status === "correct" && option.english === current.english ? "bg-green-500" : ""}
                ${status === "incorrect" && option.english !== current.english ? "bg-red-500" : ""}
              `}
              onClick={() => checkAnswer(option)}

              style={{ fontFamily: "Roboto, Noto Sans JP, Gugi, sans-serif" }}
            >
              <span className="text-6xl">{option.symbol}</span>
            </button>
          ))}
        </div>

        {/* Feedback message */}
        <p className="mt-4 text-lg font-semibold">{message}</p>

        {/* Score & Accuracy */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-center mt-6">
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

      <ListAlphabet letters={letters} language={language} />
    </div>
  );

}
