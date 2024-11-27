import TaskLDescrList from "../TaskItemDescrList/TaskItemDescrList";

import css from "./TaskItem.module.css";

export default function TaskItem({
  data: { appName, descrItems, descrLink, moduleName },
  index,
}) {
  return (
    <div className={css.item_container}>
      <h2 className={css.title}>Task {index + 1}</h2>
      <p className={css.text}>Create {appName} that must has:</p>
      <TaskLDescrList descrItems={descrItems} />
      <p className={css.link_text}>
        There is a full description of the task, but it is available only to me
        🤷🏻‍♀️{" "}
        <a href={descrLink} target="_blank">
          Homework from {moduleName}
        </a>
      </p>
    </div>
  );
}
