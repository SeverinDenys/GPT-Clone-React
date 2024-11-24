import { createSlice } from "@reduxjs/toolkit";

export const modelsSlice = createSlice({
  name: "models",
  initialState: {
    list: [],
    selectedModel: "gpt-3.5-turbo",
  },
  reducers: {
    onFetched: (state, action) => {
      const filteredModels = action.payload
        .filter((item) => {
          return (
            item.owned_by === "system" &&
            item.id.startsWith("gpt") &&
            !item.id.includes("realtime-preview") &&
            !item.id.includes("preview") &&
            !item.id.includes("audio-preview")
          );
        })
        .sort((a, b) => b.created - a.created);

      state.list = filteredModels;
    },
    onSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onFetched, onSelectedModel } = modelsSlice.actions;
export default modelsSlice.reducer;
