import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filters: {
      type: "active", // active - archived
      sort: {
        type: true,
        dueDate: false,
        category: false,
      },
    },
  },

  reducers: {
    updateFilterActiveType: (state, action) => {
      state.filters.type = action.payload.type;
    },
  },
});

export const { updateFilterActiveType } = filterSlice.actions;

export default filterSlice.reducer;
