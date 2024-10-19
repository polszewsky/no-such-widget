import { createSlice } from "@reduxjs/toolkit";
import list from "../data/notification.json";

const initialList = list;

export const notificationsListSlice = createSlice({
  name: "notificationsList",
  initialState: {
    allNotifications: [...initialList],
    filteredNotifications: [],
  },

  reducers: {
    markAllAsRead: (state, action) => {
      //do nothing
    },
    getFilteredNotifications: (state, action) => {
      const activeFilter = action.payload === "active" ? true : false;

      state.filteredNotifications = state.allNotifications.filter(
        (not) => not.archived === !activeFilter
      );
    },
  },
});

export const { markAllAsRead, getFilteredNotifications } =
  notificationsListSlice.actions;

export default notificationsListSlice.reducer;
