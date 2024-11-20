import { createSlice } from "@reduxjs/toolkit";

export const modelsSlice = createSlice({
  name: "models",
  initialState: {
    list: [],
    isFetched: false,
    selectedModel: "",
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

      // Log the entire filtered array for debugging purposes
      console.log("Filtered models:", filteredModels);
      state.list = filteredModels;
      state.isFetched = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onFetched } = modelsSlice.actions;
export default modelsSlice.reducer;
