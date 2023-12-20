import Link from "next/link";

export default function RemortgageQuiz() {
  return (
    <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
      <h2 className="font-normal py-7 text-3xl text-purple-accent">
      Remortgage Quiz
      </h2>
      <p className="py-2 font-normal text-xl">
        How much do you know about remortgaging a home? Take our quiz to find out!
        Don't worry about getting it right, these are just to help you learn.
      </p>
      <Link href="/quiz">
        <button
          className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
          type="button"
        >
          See more
        </button>
      </Link>
    </div>
  );
}
