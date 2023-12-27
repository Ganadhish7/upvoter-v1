import supabase from "../../services/supabase";

async function postAnswer({ questionId, userId, answerText }) {
  const { data, error } = await supabase.from("answers").upsert({
    question_id: questionId,
    user_id: userId,
    answer_text: answerText,
  });

  if (error) {
    throw new Error("Can't post the answer");
  }

  // console.log(data);

  return data;
}

export default postAnswer;
