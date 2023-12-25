import React, { useState, useEffect } from "react";

export default function QuizQuestions({ quiz }) {
  console.log("quiz questions", quiz.individualTask);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // const quizList = quiz.NBquiz
  // console.log("quiz list", quizList);

  useEffect(() => {
    console.log("Component mounted or updated");
    return () => console.log("Component will unmount");
  }, [selectedAnswer]);

  const handleAnswerClick = (questionIndex, answer) => {
    // Check if the clicked answer is correct
    const isCorrect =
      answer === quiz.individualTask[questionIndex].correctAnswer;

    // Update the selected answer state
    setSelectedAnswer(isCorrect ? "correct" : "incorrect");
  };
  return (
    <div>
      {quiz.individualTask.map((question, questionIndex) => (
        <div
          key={questionIndex}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-lg bg-off-white mt-1 font-medium flex text-center p-3">
            {question.question}
          </p>
          <ul className="grid grid-cols-2 grid-col gap-4">
            {question.answers.map((answer, answerIndex) => (
              <li
                key={answerIndex}
                className={`text-base font-normal text-center p-3 border-2 rounded-xl shadow-button cursor-pointer ${
                  selectedAnswer === "correct" &&
                  answer === question.correctAnswer
                    ? "bg-green-500 text-off-white"
                    : selectedAnswer === "incorrect" &&
                      answer !== question.correctAnswer
                    ? "bg-red-500 text-off-white"
                    : "bg-off-white hover:bg-purple-accent hover:text-off-white hover:font-semibold"
                }`}
                onClick={() => handleAnswerClick(questionIndex, answer)}
              >
                {answer}
              </li>
            ))}
          </ul>
          {/* <p>Correct Answer: {question.correctAnswer}</p> */}
        </div>
      ))}
    </div>
  );
}
