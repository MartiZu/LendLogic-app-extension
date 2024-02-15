export default function KatPersona({ handleNext }) {
  return (
    <>
      <div className="mt-32 mb-4 mx-4 bg-off-white rounded-3xl p-6 shadow-card text-center text-2xl min-max-width">
        <p>
          Let me introduce Kat, one of our user personas, the essence of this
          project. She is a married young woman navigating the early stages of
          homeownership with her husband. They're eager to make informed
          financial decisions, understand where their money will take them,
          securing the best possible deal.
          <p className="mt-4">
            Kat is not just a user persona; she represent the diversity and
            uniqueness of each user who can find value in our app to make
            confident financial decisions.
          </p>
        </p>
        <button
          onClick={handleNext}
          className="mx-4 mt-4 min-w-button-width w-26 bg-off-white rounded-3xl text-purple-accent p-3 shadow-card text-center text-2xl hover:bg-purple-accent hover:text-off-white hover:font-semibold"
        >
          Next
        </button>
      </div>
    </>
  );
}
