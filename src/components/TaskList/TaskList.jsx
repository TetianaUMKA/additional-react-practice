import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ data }) {
  return (
    <ul>
      {data.map((taskData, i) => (
        <li key={i + 1}>
          <TaskItem data={taskData} index={i} />
        </li>
      ))}
    </ul>
  );
}
