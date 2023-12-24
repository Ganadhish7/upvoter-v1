import supabase from "./supabase";

export async function getQuestions() {
  const { data: questions, error } = await supabase
    .from("questions")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Questions could not be loaded");
  }

  return questions;
}

/* export async function createQuestion({ newQuestion }) {
  console.log(newQuestion);
  const { data, error } = await supabase
    .from("questions")
    .insert([{ text: newQuestion }])
    .select();

  if (error) {
    throw new Error("Can't post the question");
  }
  console.log(data);

  // return data;
} */
