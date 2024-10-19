import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import alertReducer from "./slices/alertConfigurationSlice";

export default configureStore({
  reducer: {
    filter: filterReducer,
    alertReducer,
  },
});
