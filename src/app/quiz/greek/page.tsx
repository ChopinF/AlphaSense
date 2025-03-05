import Quiz from "@/components/Quiz";
import { greekLetters } from "@/lib/greek";

export default function GreekQuiz() {

  return (
    <div>
      <Quiz letters={greekLetters} title="Greek Alphabet Quiz" language="greek" />
    </div>
  );
}
