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
    mutation.mutate(newQuestion);
    setNewQuestion({ topic: "", question: "" });
  }

  return (
    <div>
      <h1>Ask a Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Topic:
          <input
            type="text"
            value={newQuestion.topic}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, topic: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Question:
          <input
            type="text"
            value={newQuestion.question}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, question: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default QuestionForm;
