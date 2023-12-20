import getSteps from "@/library/getSteps";

export default async function GetSteps() {
  try {
    const stepsData = await getSteps();
    // console.log(stepsData);

    // Map through stepsData to extract title and tasks
    const steps = stepsData.map((step) => {
      const title = step.title;
      const tasks = step.tasks;

      // Return an object with title and tasks
      return { title, tasks };
    });

    // Return the steps array
    return { steps };
  } catch (error) {
    // Handle errors
    console.error("Error fetching steps data:", error);
    return {
      props: {
        steps: [], // Return an empty array if there's an error
      },
    };
  }
}
