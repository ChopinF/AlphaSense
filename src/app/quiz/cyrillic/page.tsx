import Quiz from "@/components/Quiz";
import { cyrillicLetters } from "@/lib/cyrillic";

export default function CyrillicQuiz() {

  return (
    <div>
      <Quiz letters={cyrillicLetters} title="Cyrillic Alphabet Quiz" language="cyrillic" />
    </div>
  );

}
