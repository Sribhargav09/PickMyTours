import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    
    { id: 1, name: "Tour", icon: "icon-destination" },
    { id: 2, name: "Activity", icon: "icon-ski" },
    { id: 3, name: "Holyday Rentals", icon: "icon-home" },
    { id: 4, name: "Hotel", icon: "icon-bed" },
    { id: 5, name: "Car", icon: "icon-car" },
    { id: 6, name: "Cruise", icon: "icon-yatch" },
    { id: 7, name: "Flight", icon: "icon-tickets" },
  ],
  currentTab: "Tour",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
