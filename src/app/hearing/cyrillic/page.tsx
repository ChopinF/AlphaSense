import HearingQuiz from "@/components/HearingQuiz";
import { cyrillicLetters } from "@/lib/cyrillic";
export default function CyrillicHearingQuiz() {
  return (
    <div>
      <HearingQuiz letters={cyrillicLetters} title="Russian Hearing Quiz" language="cyrillic" />
    </div>
  );
}
