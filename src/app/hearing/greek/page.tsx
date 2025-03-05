import HearingQuiz from "@/components/HearingQuiz";
import { greekLetters } from "@/lib/greek";

export default function GreekHearingQuiz() {
  return (
    <div>
      <HearingQuiz letters={greekLetters} title="Greek Hearing Quiz" language="greek" />
    </div>
  )
}
