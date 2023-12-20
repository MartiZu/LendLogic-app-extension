import Step from "../Step";

export default function NewBuyerTimeline({ steps }) {

  // console.log("debugging on newbuyer timeline", steps);

  return (
    <div>
      <h2>Gamefied Buyer Timeline</h2>
      {steps.map((step) => (
        <Step key={step.id} title={step.title} tasks={step.tasks} />
      ))}
    </div>
  );
}
