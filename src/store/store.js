import { configureStore } from "@reduxjs/toolkit";
import modelsReducer from "./models";

export default configureStore({
  reducer: {
    models: modelsReducer,
  },
});
