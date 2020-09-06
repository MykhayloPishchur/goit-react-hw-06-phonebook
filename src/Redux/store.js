import contactReducer from "./Reducers/contacts";
import filterReducer from "./Reducers/filter";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
  },
});

export default store;
