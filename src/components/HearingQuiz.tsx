"use client";
import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import ListAlphabet from "./ListAlphabet";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { shuffleArray } from "@/lib/shuffle";

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

type State = {
  current: Letter;
  options: Letter[];
  message: string;
  score: number;
  attempts: number;
  status: string;
  isDisabled: boolean;
};

type Action =
  | { type: "SET_CURRENT"; letter: Letter }
  | { type: "SET_OPTIONS"; options: Letter[] }
  | { type: "SET_MESSAGE"; message: string }
  | { type: "INCREMENT_SCORE" }
  | { type: "INCREMENT_ATTEMPTS" }
  | { type: "SET_STATUS"; status: string }
  | { type: "SET_DISABLED"; disabled: boolean }

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

  const initialState: State = {
    current: {} as Letter,
    options: [],
    message: "",
    score: 0,
    attempts: 0,
    status: "",
    isDisabled: false,
  };


  const quizReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "SET_CURRENT":
        {
          const shuffled = [...letters]
            .filter((letter) => letter.symbol !== action.letter.symbol)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);

          return {
            ...state,
            current: action.letter,
            options: [action.letter, ...shuffled].sort(() => 0.5 - Math.random())
          };
        }
      case "SET_OPTIONS":
        return { ...state, options: action.options };
      case "SET_MESSAGE":
        return { ...state, message: action.message }
      case "INCREMENT_SCORE":
        return { ...state, score: state.score + 1 };
      case "INCREMENT_ATTEMPTS":
        return { ...state, attempts: state.attempts + 1 };
      case "SET_STATUS":
        return { ...state, status: action.status };
      case "SET_DISABLED":
        return { ...state, isDisabled: action.disabled };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [autoPlay, setAutoPlay] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<Letter | null>(null);
  const shuffledLetters = useMemo(() => shuffleArray(letters), [letters]);

  useEffect(() => {
    if (letters.length > 0) {
      dispatch({
        type: "SET_CURRENT",
        letter: letters[Math.floor(Math.random() * letters.length)],
      });
    }
  }, []); // only once in the beggining


  useEffect(() => {
    if (autoPlay && currentAudio) {
      currentAudio.play();
    }
  }, [state.current, autoPlay]);


  const currentAudio = useMemo(() => (
    state.current.sound_path ? new Audio(state.current.sound_path) : null
  ), [state.current.sound_path]);

  const playSoundCurrent = () => {
    if (currentAudio) currentAudio.play();
  }

  const checkAnswer = useCallback((selected: Letter) => {
    if (state.isDisabled) return;
    setSelectedAnswer(selected);
    dispatch({ type: "SET_DISABLED", disabled: true });

    if (selected.english === state.current.english) {
      dispatch({ type: "SET_MESSAGE", message: "✅ Correct!" });
      dispatch({ type: "SET_STATUS", status: "correct" });
      dispatch({ type: "INCREMENT_SCORE" });
    } else {
      dispatch({
        type: "SET_MESSAGE",
        message: `❌ Incorrect! The correct answer is: ${state.current.symbol}`,
      });
      dispatch({ type: "SET_STATUS", status: "incorrect" });
    }

    dispatch({ type: "INCREMENT_ATTEMPTS" });

    setTimeout(() => {
      setSelectedAnswer(null);
      dispatch({
        type: "SET_CURRENT",
        letter: letters[Math.floor(Math.random() * letters.length)],
      });

      dispatch({ type: "SET_MESSAGE", message: "" });
      dispatch({ type: "SET_STATUS", status: "" });
      dispatch({ type: "SET_DISABLED", disabled: false });
    }, 1500);
  }, [state.current, state.isDisabled, letters]);

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
          <Volume2 className="mr-3 w-10 h-10 animate-pulse" /> Listen
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
          {state.options.map((option) => (
            <button
              key={`${option.english}-${option.symbol}`}
              className={`p-4 border rounded-lg text-lg font-bold transition-all 
                  ${state.isDisabled && option.english === state.current.english ? "bg-green-500" : ""}
                  ${state.isDisabled && option.english !== state.current.english && option.english === selectedAnswer?.english ? "bg-red-500" : ""}
                  ${state.isDisabled ? "opacity-50 cursor-not-allowed" : ""}
                        `}
              onClick={() => checkAnswer(option)}
              disabled={state.isDisabled}
              style={{ fontFamily: "Roboto, Noto Sans JP, Gugi, sans-serif" }}
            >
              <span className="text-6xl">{option.symbol}</span>
            </button>
          ))}
        </div>

        {/* Feedback message */}
        <p className="mt-4 text-lg font-semibold">{state.message}</p>

        {/* Score & Accuracy */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-center mt-6">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            ✅ Score: <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{state.score}</span>
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            🎯 Accuracy:
            <span className="ml-1 text-2xl font-bold text-green-600 dark:text-green-400">
              {state.attempts > 0 ? ((state.score / state.attempts) * 100).toFixed(1) + "%" : "0%"}
            </span>
          </p>
        </div>
      </section>

      <ListAlphabet letters={shuffledLetters} language={language} />
    </div>
  );

}
