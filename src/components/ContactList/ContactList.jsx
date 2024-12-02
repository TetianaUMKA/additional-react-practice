import Contact from "../Contact/Contact";

export default function ContactList({ visibleListContacts, onDeleteContact }) {
  return (
    <ul>
      {visibleListContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
