import React from "react";

const ComparisonTool = () => {
  return (
    <>
      <section>
        <div className="mt-12 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
         <h2 className="font-normal py-7 text-3xl text-purple-accent"> Welcome to the  comparison tool</h2>
         <p className="py-2 font-normal text-xl">
          Our comparison tool is your key to unlocking personalised quotes tailored to your needs.
         </p>

         <button className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button"> <a href="https://www.mortgagecalculator.uk/" target="_blank">Comparison Tool</a></button>

        </div>
      </section>
    </>
  );
};

export default ComparisonTool;
