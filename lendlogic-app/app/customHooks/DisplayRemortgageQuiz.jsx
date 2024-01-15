import getRemortgageQuiz from "@/library/getRemortgageQuiz";

export default async function displayRemortgageQuiz() {
  try {
    const quizData = await getRemortgageQuiz();
    // console.log(quizData);

    // Map through quizData to extract question and answers
    const RMQuiz = quizData.map((task) => {
      const taskList = task.questions;
      const taskName = task.task;
      // console.log(taskList);

      const individualTask = taskList.map((quizQuestion) => {
        const id = quizQuestion.id;
        const question = quizQuestion.question;
        const answers = quizQuestion.options;
        const correctAnswer = quizQuestion.correct_answer;
        // Log each task's question and answers
        // console.log(question);
        // console.log(answers);
        // console.log(correctAnswer);
        return { id, question, answers, correctAnswer };
      });

      return { individualTask };
    });

    return { RMQuiz };
  } catch (error) {
    // Handle errors
    console.error("Error fetching quiz data:", error);
    return {
      props: {
        task: [], // Return an empty array if there's an error
      },
    };
  }
}
