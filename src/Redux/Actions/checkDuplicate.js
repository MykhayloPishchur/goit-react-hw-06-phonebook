const checkduplicate = ({ name, isExist }) => ({
  type: "CHECK_AVAIBLE",
  payload: {
    name,
    isExist,
  },
});

export default checkduplicate;
