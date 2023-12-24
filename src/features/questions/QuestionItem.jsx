/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";

//question upvoting
const upvoteQuestion = async (questionId) => {
  return questionId;
};

const QuestionItem = ({ question }) => {
  const { mutate } = useMutation(() => upvoteQuestion(question.id));
  console.log(question);

  return (
    <div>
      <h3>{question.content}</h3>
      <p>Posted by: {question.user}</p>
      <p>Upvotes: {question.upvotes}</p>
      <button onClick={() => mutate()}>Upvote</button>
    </div>
  );
};

export default QuestionItem;
