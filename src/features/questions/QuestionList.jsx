/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";
// import QuestionItem from "./QuestionItem";
// import { getQuestions } from "../../services/apiQuestions";
import supabase from "../../services/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const getUpvoteCount = async (questionId) => {
  const { data: question } = await supabase
    .from("questions")
    .select("upvotes")
    .eq("id", questionId);
  return question[0].upvotes;
};

const incrementUpvoteCount = async (questionId) => {
  const upvotes = await getUpvoteCount(questionId);
  await supabase
    .from("questions")
    .update({ upvotes: upvotes + 1 })
    .eq("id", questionId);
};

const QuestionList = ({ questions }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(incrementUpvoteCount, {
    onSuccess: () => {
      queryClient.invalidateQueries("questions");
    },
  });

  const handleUpvote = (questionId) => {
    mutation.mutate(questionId);
  };

  return (
    <div>
      <h1>Questions</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.content}</h3>
          <p>Posted by: {question.user_name}</p>
          <p>Upvotes: {question.upvotes}</p>
          <p>Timestamp: {new Date(question.created_at).toLocaleString()}</p>
          <button onClick={() => handleUpvote(question.id)}>upvote</button>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
