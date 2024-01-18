import { useMutation, useQueryClient } from "@tanstack/react-query";
import postAnswer from "./PostAnswer";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AnswerForm() {
  // eslint-disable-next-line no-unused-vars
  const [newAnswer, setNewAnswer] = useState({
    postedAnswer: "",
  });
  const queryClient = useQueryClient();

  const mutation = useMutation(postAnswer, {
    onSuccess: () => {
      queryClient.invalidateQueries("answers");
    },
  });

  function handleAnswerSubmit(e) {
    e.preventDefault();
    console.log(newAnswer);
    mutation.mutate(newAnswer);
  }
  return (
    <div>
      <form onSubmit={handleAnswerSubmit}>
        <textarea
          name="answer_text"
          value={newAnswer.postedAnswer}
          onChange={(e) => setNewAnswer({ postedAnswer: e.target.value })}
          placeholder="Type your answer..."
        />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Posting.." : "Submit answer"}
        </button>
      </form>
    </div>
  );
}

export default AnswerForm;
