import { createReducer } from "@reduxjs/toolkit";
import filterByNames from "../Actions/filter";

export default createReducer("", {
  [filterByNames]: (state, action) => action.payload,
});
