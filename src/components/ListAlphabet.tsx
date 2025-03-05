"use client";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { Volume2 } from "lucide-react";

type Letter = {
  symbol?: string;
  english: string;
  sound_path?: string;
}

type Language = {
  cyrillic?: string;
  greek?: string;
  hangul?: string;
  hiragana?: string;
  katakana?: string;
  arabic?: string;
  devanagari?: string;
}

type Props = {
  letters: Letter[],
  language: keyof Language
}

export default function ListAlphabet({ letters, language }: Props) {
  useEffect(() => {
    const fonts = {
      hangul: "Gugi",
      hiragana: "Noto Sans JP",
      katakana: "Noto Sans JP",
      cyrillic: "Roboto",
      greek: "Noto Serif",
      arabic: "Amiri, sans-serif",  // Arabic font added here
      devanagari: "Noto Sans Devanagari, sans-serif",  // Devanagari font added here
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

  const playSound = (soundPath?: string) => {
    if (soundPath) {
      const audio = new Audio(soundPath);
      audio.play();
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Quiz {language} Alphabet</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {letters.map((letter, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-lg bg-gray-800 flex flex-col items-center"
            style={{ fontFamily: "Roboto, Noto Sans JP, Gugi, sans-serif" }}
          >
            <span className="text-5xl font-bold">{letter.symbol}</span>
            <p className="text-gray-300 text-lg mt-2">{letter.english}</p>

            {/* Hearing Button */}
            {letter.sound_path && (
              <Button
                onClick={() => playSound(letter.sound_path)}
                variant="outline"
                className="mt-2 px-3 py-1 flex items-center text-sm"
              >
                <Volume2 className="mr-1 w-4 h-4" /> Listen
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
