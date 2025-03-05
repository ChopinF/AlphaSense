"use client"
import Quiz from "@/components/Quiz";
import { useEffect } from "react";
import { katakanaLetters } from "@/lib/katakana";

export default function KatakanaQuiz() {

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div>
      <Quiz letters={katakanaLetters} title="Katakana Alphabet Quiz" language="katakana" />
    </div>
  );
}
