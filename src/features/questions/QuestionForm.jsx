import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import supabase from "../../services/supabase";
// import { createQuestion } from "../../services/apiQuestions";

const postQuestion = async (newQuestion) => {
  const { topic, question } = newQuestion;

  const { data, error } = await supabase
    .from("questions")
    .upsert({ title: topic, content: question })
    .select();

  if (!data) return;

  if (error) {
    throw new Error("Can't post the question");
  }
  return data;
};

const QuestionForm = () => {
  const [newQuestion, setNewQuestion] = useState({
    topic: "",
    question: "",
  });

  const queryClient = useQueryClient();
  const mutation = useMutation(postQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries("questions");
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!newQuestion.topic || !newQuestion.question) {
      return;
    }

    mutation.mutate(newQuestion);
    setNewQuestion({ topic: "", question: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className=" space-y-1 w-full p-4 bg-slate-300 rounded-lg text-lg">
          <h1 className=" font-bold">Ask a Question here....</h1>
          <label>Topic:</label>
          <input
            className=" w-full rounded-sm"
            type="text"
            value={newQuestion.topic}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, topic: e.target.value })
            }
          />
          <br />
          <label>Question:</label>
          <input
            className=" w-full rounded-sm"
            type="text"
            value={newQuestion.question}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, question: e.target.value })
            }
          />

          <br />
          <button
            className=" text-white p-1 w-full bg-black rounded-lg hover:bg-slate-600"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
