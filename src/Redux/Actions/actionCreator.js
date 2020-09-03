const shortId = require("shortid");

export default addContact = ({ name, number }) => {
  return {
    type: "ADD_CONTACT",
    payload: {
      id: shortId.generate(),
      name,
      number,
    },
  };
};
