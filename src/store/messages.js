import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    items: [],
  },
  reducers: {
    addMessage: (state, action) => {
      console.log("action", action);
      state.items = [...state.items, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
