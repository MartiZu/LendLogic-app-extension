"use client";
import NewbuyerQuizQuestions from "./NewbuyerQuizQuestions";
import { useState } from "react";

export default function NewbuyerQuizList({ quiz }) {
  // console.log("quiz list", quiz);
  const quizList = quiz.NBquiz;
  // console.log("quiz list", quizList);
  // const [questionsVisible, setQuestionsVisible] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(
    new Array(quizList.length).fill(false)
  );

  const clickHandler = (index) => {
    const newQuiz = [...selectedTaskIndex];
    newQuiz[index] = !newQuiz[index];
    setSelectedTaskIndex(newQuiz);
  };

  const handleBackClick = () => {
    setSelectedTaskIndex(new Array(quizList.length).fill(false));
  };

  return (
    <div className="flex flex-col items-center py-4">
      {quizList.map((task, index) => (
        <div
          key={index}
          className={
            selectedTaskIndex[index]
              ? "w-80 text-lg bg-off-white mb-4 font-normal flex flex-col items-center justify-center min-h-16 p-5 border-2 border-purple-accent rounded-[2rem] shadow-button"
              : "w-80 text-lg bg-off-white mb-4 font-normal flex flex-col items-center justify-center min-h-16 p-3 border-2 border-purple-accent rounded-[2rem] shadow-button hover:bg-purple-accent hover:text-off-white hover:font-semibold"
          }
        >
          {selectedTaskIndex[index] ? (
            <NewbuyerQuizQuestions quiz={task} onBackClick={handleBackClick} selectedTaskIndex={selectedTaskIndex}/>
          ) : (
            <div
              className="w-full cursor-pointer"
              onClick={() => clickHandler(index)}
            >
              <p className="text-xl">Task {index + 1}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
