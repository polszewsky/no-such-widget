import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import notificationsListReducer from "./slices/notificationsList";
import alertReducer from "./slices/alertConfigurationSlice";

export default configureStore({
  reducer: {
    filter: filterReducer,
    notificationsList: notificationsListReducer,
    alertConfiguration: alertReducer,
  },
});
