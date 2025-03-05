import HearingQuiz from "@/components/HearingQuiz";
import { katakanaLetters } from "@/lib/katakana";

export default function KatakanaHearingQuiz() {
  return (
    <div>
      <HearingQuiz letters={katakanaLetters} title="Katakana Hearing Quiz" language="katakana" />
    </div>
  )
}
