export default function TaskLDescrList({ descrItems }) {
  return (
    <ul>
      {descrItems.map((descrItem, i) => (
        <li key={i + 1}>✦ {descrItem}</li>
      ))}
    </ul>
  );
}
