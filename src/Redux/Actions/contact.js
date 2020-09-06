import { createAction } from "@reduxjs/toolkit";
const shortId = require("shortid");

const addContact = createAction("ADD_CONTACT", ({ name, number }) => ({
  payload: {
    id: shortId.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction("DELETE_CONTACT");

export { addContact, deleteContact };
