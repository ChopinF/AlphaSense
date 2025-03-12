import HearingQuiz from "@/components/HearingQuiz";
import { hangulLetters } from "@/lib/hangul";

export default function HangulHearingQuiz() {
  return (
    <div>
      <HearingQuiz letters={hangulLetters} title="Hangul Hearing Quiz" language="hangul" />
    </div>
  )
} 
