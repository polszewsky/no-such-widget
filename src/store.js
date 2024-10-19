import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import notificationsListReducer from "./slices/notificationsList";

export default configureStore({
  reducer: {
    filter: filterReducer,
    notificationsList: notificationsListReducer,
  },
});
