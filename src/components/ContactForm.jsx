import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const TextInput = styled.input`
  width: 200px;
  padding: 10px;
  margin: 10px 10px 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin: 10px 0;
`;

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        maxLength={12}
      />
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

export default ContactForm;
