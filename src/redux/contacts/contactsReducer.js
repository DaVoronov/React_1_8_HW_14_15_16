import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contactsActions";

const initialState = {
  contacts: [],
};

const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.contacts.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    });
});

export default contactsReducer;
