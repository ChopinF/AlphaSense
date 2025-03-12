import HearingQuiz from "@/components/HearingQuiz";
import { devanagariLetters } from "@/lib/devanagari";

export default function DevanagariHearingQuiz() {
  return (
    <div>
      <HearingQuiz letters={devanagariLetters} title="Devanagari Hearing Quiz" language="devanagari" />
    </div>
  );
}
