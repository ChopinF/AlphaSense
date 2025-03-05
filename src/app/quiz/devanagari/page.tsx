import Quiz from "@/components/Quiz";
import { devanagariLetters } from "@/lib/devanagari";

export default function DevanagariQuiz() {
  return (
    <div>
      <Quiz letters={devanagariLetters} title="Devanagari Alphabet Quiz" language="devanagari" />
    </div>
  );
} 
