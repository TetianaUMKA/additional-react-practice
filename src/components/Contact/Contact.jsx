export default function Contact({
  contact: { id, name, number },
  onDeleteContact,
}) {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
