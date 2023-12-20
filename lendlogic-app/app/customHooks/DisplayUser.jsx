import getUsers from "@/library/getUsers";

export default async function displayUser(email) {
  // need to put email into the search function so it works with any user that logs in

  const userData = await getUsers();
  // console.log(userData);

  const user = userData.find((user) => user.email === email);

  if (user.email === email) {
    const loanAmount = user.mortgage ? user.mortgage.outstanding_balance : 0;
    const userMonthlyPayment = user.mortgage
      ? user.mortgage.monthly_payment
      : 0;
    const userInterestRate = user.mortgage ? user.mortgage.interest_rate : 0;
    const loanLength = user.mortgage ? user.mortgage.term_years : 0;
    const salary = user.salary;
    const property_value = user.property_value;
    const credit_score = user.credit_score;
    const postcode = user.address.postcode.split(" ")[0];
    const userName = user.name;
    const mortgageType = user.mortgage ? user.mortgage.type : 0;
    const fixedTermLength = user.mortgage ? user.mortgage.fixed_term : 0;
    const startDate = user.mortgage ? user.mortgage.start_date : 0;

    return {
      salary,
      property_value,
      credit_score,
      loanLength,
      loanAmount,
      userMonthlyPayment,
      userInterestRate,
      userName,
      postcode,
      mortgageType,
      fixedTermLength,
      startDate,
    };
  }
  console.log("no user found");
}
