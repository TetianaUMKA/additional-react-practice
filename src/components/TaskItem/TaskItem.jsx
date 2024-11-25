import TaskLDescrList from "../TaskDescrList/TaskDescrList";

export default function TaskItem({
  data: { appName, descrItems, descrLink },
  index,
}) {
  return (
    <>
      <h2>Task {index + 1}</h2>
      <p>Create {appName} that must has:</p>
      <TaskLDescrList descrItems={descrItems} />
      <p>There is a full description of the task</p>
      <a href={descrLink} target="_blank">
        Homework from Module 3 `Forms`
      </a>
    </>
  );
}
