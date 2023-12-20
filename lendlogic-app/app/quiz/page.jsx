import Link from "next/link";
import GetNewbuyerQuiz from "../customHooks/DisplayNewbuyerQuiz";
import DisplayUser from "../customHooks/DisplayUser";
import { cookies } from "next/headers";
import QuizList from "./QuizList";

export default async function QuizHomepage() {
  async function readCookie(cookieName) {
    const cookie = cookies().get(cookieName);
    return cookie.value;
  }
  const user = await readCookie("user_id");
  const q1 = await readCookie("q1");
  const q2 = await readCookie("q2");

  const currentUser = await DisplayUser(user);

  const NBQuiz = await GetNewbuyerQuiz();
  // console.log("quizlist page", NBQuiz);

  return (
    <>
      <div className="flex flex-col my-8 rounded-3xl text-center text-2xl">
        <h1 className="font-normal pt-7 text-3xl text-purple-accent">
          We want you to succeed!
        </h1>
        <p className="px-2 py-4 text-lg">
          {currentUser.userName} this is for you to check what you have learnt so far.
        </p>
      </div>
      <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
        <h1 className="font-normal pt-7 text-3xl text-purple-accent">
          The learning tool you did not know you needed!
        </h1>
        <p className="mt-4 px-2 py-4 text-lg">
          We know technical terms sound scary, but we are here to help you. Take
          our quiz to test what you have understood so far. Don't worry about
          getting it right, we just wany to help you learn.</p>
          <p className="px-2 py-4 text-lg">Come back any time
          you wish to test your knowledge.
        </p>
      </div>
      {q1 === "a1" ? <QuizList quiz={NBQuiz} /> : null}
      {/* {q1 === "a2" ? <QuizList quiz={RMQuiz} /> : null} */}
    </>
  );
}