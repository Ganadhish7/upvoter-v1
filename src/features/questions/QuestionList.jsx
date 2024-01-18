/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";
// import QuestionItem from "./QuestionItem";
// import { getQuestions } from "../../services/apiQuestions";
// import { useState } from "react";
import supabase from "../../services/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import AnswerForm from "../answers/AnswerForm";
// import AnswerList from "../answers/AnswerList";

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
  // const [newAnswerText, setNewAnswerText] = useState("");
  // const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const queryClient = useQueryClient();
  const mutation = useMutation(incrementUpvoteCount, {
    onSuccess: () => {
      queryClient.invalidateQueries("questions");
    },
  });

  const handleUpvote = (questionId) => {
    mutation.mutate(questionId);
  };

  // function handleAnswerSubmit(questionId) {
  //   console.log(questionId);
  //   setNewAnswerText("");
  //   setSelectedQuestionId(null);
  // }

  return (
    <div className=" bg-slate-400 mt-5 rounded-xl max-h-[25rem] overflow-y-auto md:overflow-auto">
      <p className=" font-bold uppercase">Questions</p>
      {questions.map((question) => (
        <div className=" text-left p-3 text-lg" key={question.id}>
          <div className=" bg-slate-500 p-5 rounded-lg leading-8 tracking-wide">
            <p className=" font-bold text-white">
              Question: {question.content}
            </p>
            <p>Posted by: {question.user_name}</p>
            <p>Upvotes: {question.upvotes}</p>
            <p>Timestamp: {new Date(question.created_at).toLocaleString()}</p>
            <button
              className=" bg-black text-white p-1 rounded-lg w-full hover:bg-slate-700"
              onClick={() => handleUpvote(question.id)}
            >
              Upvote
            </button>
          </div>

          {/* <AnswerForm questionId={question.id} />
          <AnswerList questionId={question.id} /> */}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
