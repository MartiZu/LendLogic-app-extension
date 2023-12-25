export default function Step({ id, tasks, title }) {
  return (
    <div className="flex flex-col text-left items-center py-4">
      <ul data-testid="step-list-id">
        {tasks
          .filter((task) => task.id === id)
          // Only show tasks with the selected ID
          .map((task, index) => (
            // .map((task, index) => (
            <li key={index} className="list-disc ml-5 px-2">
              {task}
            </li>
          ))}
      </ul>
    </div>
  );
}
