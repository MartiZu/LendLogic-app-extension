import getRemortgageSteps from "@/library/getRemortgageSteps";

export default async function displayRemortgageSteps() {
  try {
    const stepsData = await getRemortgageSteps();
    // console.log(stepsData);

    // Map through stepsData to extract title and tasks
    const remortgageSteps = stepsData.map((step) => {
      const title = step.title;
      const tasks = step.tasks;

      // Return an object with title and tasks
      return { title, tasks };
    });

    // Return the steps array
    return { remortgageSteps };
  } catch (error) {
    // Handle errors
    console.error("Error fetching steps data:", error);
    return {
      props: {
        remortgageSteps: [], // Return an empty array if there's an error
      },
    };
  }
}
