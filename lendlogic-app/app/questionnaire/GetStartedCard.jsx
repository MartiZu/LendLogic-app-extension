export default function GetStartedCard({ handleSubmit }) {
  return (
    <>
      <div className="mt-32 mb-4 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl min-max-width">
        <h1 className="font-normal py-7 text-3xl text-purple-accent">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Welcome to LendLogic! We're not just about rates, we're about you.
        </h1>
        <p className="py-2 font-normal text-xl">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We're here to guide you through the exciting world of homeownership,
          offering personalized advice and finding competitive mortgage rates
          that fit your unique story.
        </p>

        <button data-testid="started-button"
          type="submit"
          onClick={handleSubmit}
          className="w-48 h-16 bg-purple-accent cursor-pointer m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Let's get started!
        </button>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="current-circle w-3 h-3 rounded-full bg-purple-300 shadow-card mx-1"></div>
        <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
        <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
      </div>
    </>
  );
}
