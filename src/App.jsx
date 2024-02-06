import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import styled from "styled-components";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { addContact, deleteContact } from "./redux/contacts/contactsActions";
import { getContacts } from "./redux/contacts/contactsSelectors";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 500px;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: block;
`;

const App = () => {
  const [filter, setFilter] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert("A contact with this name is already in use");
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addContact={handleAddContact} />
      <SearchInput
        type="text"
        placeholder="search"
        value={filter}
        onChange={handleFilterChange}
      />
      <h2>Contacts</h2>
      <ContactList
        contacts={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </Container>
  );
};

export default App;
