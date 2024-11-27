import css from "./TaskItemDescrLIst.module.css";

export default function TaskLDescrList({ descrItems = [] }) {
  return (
    <ul className={css.list}>
      {descrItems.map((descrItem, i) => (
        <li key={i + 1}>✦ {descrItem}</li>
      ))}
    </ul>
  );
}
