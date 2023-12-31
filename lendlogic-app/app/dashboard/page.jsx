import LearningSection from "./remortgage_components/LearningSection";
import Newsletter from "./Newsletter";
import ComparisonTool from "./ComparisonTool";
import displayUser from "../customHooks/DisplayUser";
import displayRemortgageSteps from "../customHooks/DisplayRemortgageSteps";
import displayProperties from "../customHooks/DisplayProperties";
import displaySteps from "../customHooks/DisplaySteps";
import NewBuyerReport from "./newbuyer_components/NewBuyerReport";
import NewbuyerQuiz from "./newbuyer_components/NewbuyerQuiz";
import Checklist from "./newbuyer_components/Checklist";
import RemortgageChecklist from "./remortgage_components/RemortgageChecklist";
import BuyingHomeTimeline from "./newbuyer_components/BuyingHomeTimeline";
import RemortgageQuiz from "./remortgage_components/RemortgageQuiz";
import RemortgageReport from "./remortgage_components/RemortgageReport";
import RemortgageHomeTimeline from "./remortgage_components/RemortgageHomeTimeline";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";

export default async function Dashboard() {
  async function readCookie(cookieName) {
    const cookie = cookies().get(cookieName);
    const cookieUser = cookie.value;
    return cookieUser;
  }
  const user = await readCookie("user_id");
  const q2 = await readCookie("q2");
  const q1 = await readCookie("q1");

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  //destructing the object returned from the custom hook
  const currentUser = await displayUser(user);
  // console.log(currentUser);

  const properties = await displayProperties();
  // console.log(properties);
  // read cookies fucntion

  const steps = await displaySteps();
  // console.log("debugging on dashboard page stesp", steps);
  const remortgageSteps = await displayRemortgageSteps();

  return (
    <>
      <Link href="/questionnaire">
        <div className="text-purple-accent flex flex-row pl-2 pt-2">
          <Image
            src="/arrow_back_ios.svg"
            width={20}
            height={20}
            alt="Back icon"
            priority={true}
          />
          <h1>Back</h1>
        </div>
      </Link>
      <div className="flex m-auto flex-col my-8 rounded-3xl text-center text-2xl min-max-width">
        <h1 className="font-normal pt-4 text-3xl text-purple-accent">
          We've got your back!
        </h1>
        <p className="px-2 py-4 text-lg">
          Welcome {currentUser.userName}, here is everything you need to know
        </p>
        {q1 === "a2" ? <RemortgageReport value={currentUser} q2={q2} /> : null}
        {q1 === "a1" && q2 === "a2" ? <Checklist /> : null}
        {q1 === "a1" ? (
          <NewBuyerReport value={currentUser} properties={properties} />
        ) : null}
        {q1 === "a4" || q1 === "a3" ? <ComparisonTool /> : null}
        <Newsletter />
        {q1 === "a1" && q2 === "a1" ? <Checklist /> : null}
        {q1 === "a2" ? <RemortgageChecklist /> : null}
        {q1 === "a1" ? <BuyingHomeTimeline steps={steps} /> : null}
        {q1 === "a2" ? (
          <RemortgageHomeTimeline steps={remortgageSteps} />
        ) : null}
        {q1 === "a1" ? <NewbuyerQuiz /> : null}
        {q1 === "a2" ? <RemortgageQuiz /> : null}
      </div>
    </>
  );
}
