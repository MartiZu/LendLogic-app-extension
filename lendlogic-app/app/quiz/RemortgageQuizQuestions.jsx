import React, { useState } from "react";
import Image from "next/image";

export default function RemortgageQuizQuestions({ quiz, onBackClick }) {
  const [selectedAnswer, setSelectedAnswer] = useState(
    new Array(quiz.individualTask.length).fill(null)
  );

  const handleAnswerClick = (questionId, answerId, answerText) => {
    const questionIndex = quiz.individualTask.findIndex(
      (question) => question.id === questionId
    );
    //check if the clicked answer is correct
    const isCorrect =
      answerText === quiz.individualTask[questionIndex].correctAnswer;
    //reset all answers to null
    const newSelectedAnswers = new Array(quiz.individualTask.length).fill(null);
    //update the selected answer state
    newSelectedAnswers[questionIndex] = {
      id: answerId,
      text: answerText,
      status: isCorrect ? "correct" : "incorrect",
    };
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
                    selectedAnswer[questionIndex]?.id === answer.id &&
                    selectedAnswer[questionIndex]?.status === "correct"
                      ? "bg-green-500 text-off-white"
                      : selectedAnswer[questionIndex]?.id === answer.id &&
                        selectedAnswer[questionIndex]?.status === "incorrect"
                      ? "bg-red-500 text-off-white"
                      : "bg-off-white hover:bg-purple-accent hover:text-off-white hover:font-semibold"
                  }`}
                  onClick={() =>
                    handleAnswerClick(questionId, answer.id, answer.text)
                  }
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
