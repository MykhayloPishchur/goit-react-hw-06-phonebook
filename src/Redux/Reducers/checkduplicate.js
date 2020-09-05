const phoneBookReducer = (
  state = { name: "", isExist: false },
  { type, payload }
) => {
  switch (type) {
    case "CHECK_AVAIBLE":
      return [...state, payload];

    default:
      return state;
  }
};

export default phoneBookReducer;
