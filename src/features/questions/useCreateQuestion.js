// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createQuestion } from "../../services/apiQuestions";

// export function useCreateQuestion() {
//   const queryClient = useQueryClient();

//   const { mutate: addQuestion, isLoading: isUploading } = useMutation({
//     mutationFn: (newQuestion) => createQuestion(newQuestion),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["questions"] });
//     },
//     onError: (err) => console.error(err),
//   });

//   return { isUploading, addQuestion };
// }
