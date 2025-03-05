import HearingQuiz from "@/components/HearingQuiz";
import { arabicLetters } from "@/lib/arabic";

export default function ArabicHearingQuiz() {
  return (
    <div>
      <HearingQuiz letters={arabicLetters} title="Arabic Hearing Quiz" language="arabic" />
    </div>
  );
}
