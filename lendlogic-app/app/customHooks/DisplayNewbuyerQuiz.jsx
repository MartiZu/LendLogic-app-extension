import getNewbuyerQuiz from "@/library/getNewbuyerQuiz";

export default async function displayNewbuyerQuiz() {
  try {
    const quizData = await getNewbuyerQuiz();
    // console.log(quizData);

    // Map through quizData to extract question and answers
    const NBquiz = quizData.map((task) => {
      const taskList = task.questions;
      // console.log(taskList);

      const individualTask = taskList.map((quizQuestion) => {
        const question = quizQuestion.question;
        const answers = quizQuestion.options;
        const correctAnswer = quizQuestion.correct_answer;
        // Log each task's question and answers
        // console.log(question);
        // console.log(answers);
        // console.log(correctAnswer);
        return { question, answers, correctAnswer };
      });

      return { individualTask };
    });

    // Log the entire answers array
    // console.log(NBquiz);

    // Return the answers array
    // console.log(NBquiz[0]);
    return { NBquiz };
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
