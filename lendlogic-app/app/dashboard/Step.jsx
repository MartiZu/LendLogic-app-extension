export default function Step({ title, tasks }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
