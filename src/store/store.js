import { configureStore } from "@reduxjs/toolkit";
import modelsReducer from "./models";
import messagesSlice from "./messages";

export default configureStore({
  reducer: {
    models: modelsReducer,
    messages: messagesSlice,
  },
});
