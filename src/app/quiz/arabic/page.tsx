import Quiz from "@/components/Quiz";
import { arabicLetters } from "@/lib/arabic";

export default function ArabicQuiz() {
  return (
    <div>
      <Quiz letters={arabicLetters} title="Arabic Alphabet Quiz" language="arabic" />
    </div>
  );
}
