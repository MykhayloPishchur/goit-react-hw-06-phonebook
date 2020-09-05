import { createStore, combineReducers } from "redux";
import contactReducer from "./Reducers/contacts";
import filterReducer from "./Reducers/filter";
import duplicateReducer from "./Reducers/checkduplicate";

const rootReducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
  dublicate: duplicateReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
