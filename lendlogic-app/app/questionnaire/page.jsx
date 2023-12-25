import { cookies } from "next/headers";
import QuestionnaireContent from "./QuestionnaireContent";

export default function Questionnaire() {
  //manage the preferences cookies
  async function setQuestionCookies(qNum, aNum) {
    "use server";
    cookies().set(qNum, aNum);
  }
  return (
    <main>
      <div className="flex flex-col items-center m-auto min-max-width">
        <QuestionnaireContent cookieHandler={setQuestionCookies} />
      </div>
    </main>
  );
}
