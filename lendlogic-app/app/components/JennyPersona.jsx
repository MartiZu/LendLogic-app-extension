export default function JennyPersona({ handleNext }) {
  return (
    <>
      <div className="mt-32 mb-4 mx-4 bg-off-white rounded-3xl p-6 shadow-card text-center text-2xl min-max-width">
        <p>
          Let me introduce Jenny, one of our user personas, the essence of our
          project. Jenny is 62 and she is close to paying off her mortgage.
          However, she is exploring remortageging options like releasing equity
          to help her daughter step onto the property ladder.
          <p className="mt-4">
            Jenny is not just a user persona; she represent the diversity and
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
