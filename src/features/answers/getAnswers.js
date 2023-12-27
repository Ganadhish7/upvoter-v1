import supabase from "../../services/supabase";

async function fetchAnswersForQuestion(questionId) {
  const { data, error } = await supabase
    .from("answers")
    .select("*")
    .eq("question_id", questionId);

  if (error) {
    console.error(error.message);
    return null;
  }

  // const answers = data;
  // console.log("answers for question", answers);
  return data;
}

export default fetchAnswersForQuestion;
