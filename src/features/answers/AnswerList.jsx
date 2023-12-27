import { useQuery } from "@tanstack/react-query";
import fetchAnswersForQuestion from "./getAnswers";

// eslint-disable-next-line react/prop-types
function AnswerList({ questionId }) {
  const { data: answers } = useQuery(["answers", questionId], () =>
    fetchAnswersForQuestion(questionId)
  );

  if (!answers) {
    return null;
  }

  return (
    <div>
      <ul>
        {answers.map((answer) => (
          <li key={answer.question_id}>
            <p>{answer.answer_text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnswerList;
