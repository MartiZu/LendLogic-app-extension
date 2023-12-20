export default function LearningSection() {
  return (
    <>
      <div className="mt-6 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl">
        <h2 className="font-normal pt-7 text-3xl text-purple-accent">
          Getting ready to remortgage
        </h2>
        <p className="pt-7 pb-2 font-normal text-xl">Guide</p>
        <a href="https://www.gov.uk/guidance/how-to-remortgage-your-help-to-buy-home-and-borrow-more-money" target="_blank">
          <button className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button cursor-pointer">
            See More
          </button>
        </a>
      </div>
    </>
  );
}
