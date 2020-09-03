const shortId = require("shortid");
import initialState from "../initialState";

const phoneBookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CONTACT":
      return [...state, payload];

    default:
      return state;
  }
};

export default phoneBookReducer;
