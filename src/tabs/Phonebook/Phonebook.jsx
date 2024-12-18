import { useState, useEffect } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const phonebookContacts = JSON.parse(localStorage.getItem("contacts")) || [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function Phonebook() {
  const [contacts, setContacts] = useState(phonebookContacts);
  const [contactFilter, setContactFilter] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(contactFilter.toLowerCase());
  });

  const handleSetContactFilter = (newContactFilter) => {
    setContactFilter(newContactFilter);
  };

  const addContact = (newContact) => {
    setContacts((contacts) => {
      console.log(newContact);
      return [...contacts, newContact];
    });
  };

  const deleteContact = (id) => {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts), [contacts]);
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox
        value={contactFilter}
        onHandleSetContactFilter={handleSetContactFilter}
      />
      {filteredContacts.length !== 0 ? (
        <ContactList
          visibleListContacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>
          {contactFilter.length !== 0
            ? "No contact with such name"
            : "No contacts. Add contacts, please!"}
        </p>
      )}
    </div>
  );
}
