import supabase from "../../services/supabase";

async function postAnswer(answer) {
  const { question_id, user_id, answer_text } = answer;
  const { data, error } = await supabase
    .from("answers")
    .upsert({
      question_id,
      user_id,
      answer_text,
    })
    .select();

  if (error) {
    throw new Error("Can't post the answer");
  }

  // console.log(data);

  return data;
}

export default postAnswer;
