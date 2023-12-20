import React, { useState } from "react";

export default function QuizQuestions({ quiz }) {
  console.log("quiz questions", quiz.individualTask);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // const quizList = quiz.NBquiz
  // console.log("quiz list", quizList);

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
          <p className="w-80 text-lg bg-off-white mt-10 mb-4 font-normal flex text-center h-28 p-3 border-2 border-purple-accent rounded-full shadow-button cursor-pointer hover:bg-purple-accent hover:text-off-white hover:font-semibold">
            {question.question}
          </p>
          <ul className="grid grid-cols-2 grid-col gap-4">
            {question.answers.map((answer, answerIndex) => (
              <li
                key={answerIndex}
                className={`w-80 text-base mb-4 font-normal text-center h-20 p-3 border-2 rounded-full shadow-button cursor-pointer ${
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
