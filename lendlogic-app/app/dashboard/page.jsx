import LearningSection from "./LearningSection";
import Newsletter from "./Newsletter";
import RemortgageReport from "./remortgage_components/RemortgageReport";
import DisplayUser from "../customHooks/DisplayUser";
import DisplayProperties from "../customHooks/DisplayProperties";
import NewBuyerReport from "./newbuyer_components/NewBuyerReport";
import { cookies } from "next/headers";
import Checklist from "./newbuyer_components/Checklist";
import BuyingHomeTimeline from "./newbuyer_components/BuyingHomeTimeline";
import GetSteps from "../customHooks/DisplaySteps";
import ComparisonTool from "./ComparisonTool";

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
  const currentUser = await DisplayUser(user);
  // console.log(currentUser);

  const properties = await DisplayProperties();
  // console.log(properties);
  // read cookies fucntion

  const steps = await GetSteps();
  // console.log("debugging on dashboard page stesp", steps);

  return (
    <>
      <div className="flex m-auto flex-col my-8 rounded-3xl text-center text-2xl min-max-width">
        <h1 className="font-normal pt-7 text-3xl text-purple-accent">
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
        {q1 === "a2" ? <LearningSection /> : null}
        <Newsletter />
        {q1 === "a1" && q2 === "a1" ? <Checklist /> : null}
        {q1 === "a1" ? <BuyingHomeTimeline steps={steps} /> : null}
      </div>
    </>
  );
}
