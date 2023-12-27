import { useMutation, useQueryClient } from "@tanstack/react-query";
import postAnswer from "./PostAnswer";

// eslint-disable-next-line react/prop-types
function AnswerForm({ questionId }) {
  const queryClient = useQueryClient();

  const mutation = useMutation(postAnswer, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["question", questionId]);
      queryClient.invalidateQueries("answers");
    },
  });

  function handleAnswerSubmit(e) {
    e.preventDefault();
    mutation.mutate({
      questionId,
      answer_text: e.target.elements.answer_text.value,
    });

    e.target.elements.answer_text.value = "";
  }
  return (
    <div>
      <form onSubmit={handleAnswerSubmit}>
        <textarea name="answer_text" placeholder="Type your answer..." />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Posting.." : "Submit answer"}
        </button>
      </form>
    </div>
  );
}

export default AnswerForm;
