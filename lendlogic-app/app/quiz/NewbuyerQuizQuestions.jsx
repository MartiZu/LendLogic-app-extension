import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function QuizQuestions({
  id,
  quiz,
  onBackClick,
  selectedTaskIndex,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(
    new Array(quiz.individualTask.length).fill(null)
  );
  // const quizList = quiz.NBquiz
  // console.log("quiz list", quizList);

  const handleAnswerClick = (questionId, answer.id, answer.text) => {
    const questionIndex = quiz.individualTask.findIndex(
      (question) => question.id === questionId
    );
  
    // Check if the clicked answer is correct
    const isCorrect =
    answer.text === quiz.individualTask[questionIndex].correctAnswer;
  
    // Update the selected answer state for the specific task
    const newSelectedAnswers = [...selectedAnswer];
  
    // Update the selected answer state
    newSelectedAnswers[selectedTaskIndex] = {
      id: selectedAnswerId,
      text: selectedAnswerText,
      status: isCorrect ? "correct" : "incorrect",
    };
  
    console.log("New Selected Answers:", newSelectedAnswers);
    setSelectedAnswer(newSelectedAnswers);
  };
  return (
    <div>
      <div className="text-purple-accent flex flex-row pl-2 pt-2 w-20">
        <Image
          className="cursor-pointer"
          onClick={onBackClick}
          src="/arrow_back_ios.svg"
          width={20}
          height={20}
          alt="Back icon"
          priority={true}
        />
        <h1 className="cursor-pointer" onClick={onBackClick}>
          Back
        </h1>
      </div>
      {quiz.individualTask.map((question, questionIndex) => {
        const questionId = question.id;
        console.log("question id", questionId);
        return (
          <div
            key={questionIndex}
            className="flex flex-col justify-center items-center"
          >
            <p className="text-lg bg-off-white mt-1 font-medium flex text-center p-3">
              {questionId}. {question.question}
            </p>
            <ul className="grid grid-cols-2 grid-col gap-4">
              {question.answers.map((answer) => (
                <li
                  key={answer.id}
                  className={`text-base font-normal text-center p-3 border-2 rounded-xl shadow-button cursor-pointer ${
                    selectedAnswer[selectedTaskIndex] === "correct" &&
                    answer === question.correctAnswer
                      ? "bg-green-500 text-off-white"
                      : selectedAnswer[selectedTaskIndex] === "incorrect" &&
                        answer !== question.correctAnswer
                      ? "bg-red-500 text-off-white"
                      : "bg-off-white hover:bg-purple-accent hover:text-off-white hover:font-semibold"
                  }`}
                  onClick={() => handleAnswerClick(questionId, answer.id, answer.text)}
                >
                  {answer.text}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
