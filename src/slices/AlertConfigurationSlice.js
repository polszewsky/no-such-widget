import { createSlice } from "@reduxjs/toolkit";

const defaultAlertConfiguration = {
    name: "",
    type: "",
    subtype: "",
    frequency: "",
    clent: "",
    description: "",
    url: "",
  };


const alertConfigurationSlice = createSlice({
    
    name: "alertConfiguration",
    initialState: {
      user_id: 1,
      vehicles: [defaultAlertConfiguration],
    },

    reducers: {
      addUserVehicles: (state, action) => {
        state.vehicles = action.payload;
      },

      removeUserVehicle: (state, action) => {
        state.vehicles.splice(action.payload, 1);
      },
    },
  });