"use client";
import Quiz from "@/components/Quiz";
import kroman from "kroman";
import { useEffect } from "react";
import { hangulLetters } from "@/lib/hangul";


export default function HangulQuiz() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Gugi&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);


  return (
    <div>
      <Quiz letters={hangulLetters} title="Hangul(Korean) Alphabet Quiz" language="hangul" />
    </div>
  );
}
