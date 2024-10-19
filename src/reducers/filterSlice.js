import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filters: {
      type: "active", // active - archived
      sort: {
        type: false,
        dueDate: false,
        category: false,
      },
    },
  },

  reducers: {
    updateFilterActiveType: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { updateFilterActiveType } = filterSlice.actions;

export default filterSlice.reducer;
