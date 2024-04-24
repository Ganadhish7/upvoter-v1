import { useQuery } from "@tanstack/react-query";
import QuestionForm from "../features/questions/QuestionForm";
import QuestionList from "../features/questions/QuestionList";
import supabase from "../services/supabase";
import { useState } from "react";

const getQuestions = async () => {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .order("upvotes", { ascending: false });
  if (error) {
    throw new Error("Error fetching questions");
  }
  return data;
};

function Dashboard() {
  const [openForm, setOpenForm] = useState(false);

  function handleQuestionForm(){
    setOpenForm(!openForm);
  }
  const { data, error } = useQuery(["questions"], getQuestions, {
    staleTime: 10000,
  });
  

  if (error) {
    return <div>Error loading questions</div>;
  }

  return (
    <div className=" text-center p-5">
      <div className=" w-72 p-3">
      <p className=" text-2xl cursor-pointer font-bold uppercase text-black tracking-widest" onClick={handleQuestionForm}>
       Click here to Ask a question 👈
      </p>
      </div>
      {openForm && <QuestionForm />}
      <QuestionList questions={data || []} />
    </div>
  );
}

export default Dashboard;
