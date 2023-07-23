import { configureStore } from "@reduxjs/toolkit";
import { questionsApi } from "../services/api/questionApi";

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware),
});
