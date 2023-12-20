"use client";
import QuizQuestions from "./QuizQuestions";
import { useState } from "react";

export default function QuizList({ quiz }) {
  // console.log("quiz list", quiz);
  const quizList = quiz.NBquiz;
  console.log("quiz list", quizList);
  const [questionsVisible, setQuestionsVisible] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(new Array(quizList.length).fill(false));

  const clickHandler = (index) => {
    const newQuiz = [...selectedTaskIndex];
    newQuiz[index] = !newQuiz[index];
    setSelectedTaskIndex(newQuiz);
  };
  return (
    <div className="flex flex-col items-center py-4">
      {quizList.map((task, index) => (
        <div key={index}>
          <p
            className="mt-6 mx-4 w-80 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl cursor-pointer hover:bg-purple-accent hover:text-off-white hover:font-semibold"
            onClick={() => clickHandler(index)}
          >
            Task {index + 1}
          </p>
          {selectedTaskIndex[index] ? <QuizQuestions quiz={task} /> : null}
        </div>
      ))}
    </div>
  );
}

{
  /* {!selectedTaskIndex && (
 <div
   className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl cursor-pointer hover:bg-purple-accent hover:text-off-white hover:font-semibold"
   onClick={() => clickHandler(index)}
 >
   <h3>Task {index + 1}</h3>
 </div>
)} */
}
