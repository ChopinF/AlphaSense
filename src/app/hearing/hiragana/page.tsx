import HearingQuiz from "@/components/HearingQuiz";
import { hiraganaLetters } from "@/lib/hiragana";

export default function HiraganaHearingQuiz() {
  return (
    <div>
      <HearingQuiz letters={hiraganaLetters} title="Hiragana Hearing Quiz" language="hiragana" />
    </div>
  )
}
