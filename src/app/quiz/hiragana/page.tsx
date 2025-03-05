"use client"
import Quiz from "@/components/Quiz";
import { hiraganaLetters } from "@/lib/hiragana";
import { useEffect } from "react";

export default function HiraganaQuiz() {

  useEffect(() => {
    const linkNotoSansJP = document.createElement("link");
    linkNotoSansJP.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap";
    linkNotoSansJP.rel = "stylesheet";
    document.head.appendChild(linkNotoSansJP);
  }, []);


  return (
    <div>
      <Quiz letters={hiraganaLetters} title="Hiragana Alphabet Quiz" language="hiragana" />
    </div>
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Quiz letters={hiraganaLetters} title="Hiragana Alphabet Quiz" language="hiragana" />

      </div>

      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Hiragana Alphabet </h1>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {hiraganaLetters.map((letter, english) => (
            <div
              key={english}
              className="p-4 border rounded-lg shadow-lg bg-gray-800"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              <span className="text-5xl font-bold">{letter.symbol}</span>
              <p className="text-gray-600 text-lg mt-2">{letter.english}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
