import supabase from "../../services/supabase";

async function postAnswer(answer) {
  const { postedAnswer, questionId } = answer;
  const { data, error } = await supabase
    .from("answers")
    .update({
      answer_text: postedAnswer,
    })
    .eq(questionId)
    .select();

  if (error) {
    throw new Error("Can't post the answer");
  }

  console.log(data);

  // return data;
}

export default postAnswer;
