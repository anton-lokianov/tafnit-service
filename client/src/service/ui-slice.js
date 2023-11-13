import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: {
    driverForm: false,
    loginError: false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { modalId } = action.payload;
      state.modals[modalId] = true;
    },
    closeModal: (state, action) => {
      const { modalId } = action.payload;
      state.modals[modalId] = false;
    },
  },
});

export const { openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
