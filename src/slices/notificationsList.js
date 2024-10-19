import { createSlice } from "@reduxjs/toolkit";
import list from "../data/notification.json";

const initialList = list;

export const notificationsListSlice = createSlice({
  name: "notificationsList",
  initialState: {
    allNotifications: [...initialList],
    filteredNotifications: [],

    //selectedID
    selectedNotification: {},
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
    loadSelectedNotification: (state, action) => {
      const selectedId = action.payload.id;

      if (selectedId !== "" && selectedId !== null) {
        state.selectedNotification = state.filteredNotifications
          .filter((n) => n.id === selectedId)
          .at(0);
      }
    },
    archiveSelectedNotification: (state, action) => {
      const selectedId = action.payload.id;

      if (selectedId !== "" && selectedId !== null) {
        // Find the object by id and update it immutably
        const index = state.allNotifications.findIndex(
          (n) => n.id === selectedId
        );
        if (index !== -1) {
          state.allNotifications[index] = {
            ...state.allNotifications[index],
            archived: true,
          };
        }
      }
    },
  },
});

export const {
  markAllAsRead,
  getFilteredNotifications,
  loadSelectedNotification,
  archiveSelectedNotification,
} = notificationsListSlice.actions;

export default notificationsListSlice.reducer;
