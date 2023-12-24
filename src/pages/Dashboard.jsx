import { useQuery } from "@tanstack/react-query";
import QuestionForm from "../features/questions/QuestionForm";
import QuestionList from "../features/questions/QuestionList";
import supabase from "../services/supabase";

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
  const { data, error } = useQuery(["questions"], getQuestions, {
    staleTime: 10000,
  });

  if (error) {
    return <div>Error loading questions</div>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <QuestionForm />
      <QuestionList questions={data || []} />
    </div>
  );
}

export default Dashboard;
