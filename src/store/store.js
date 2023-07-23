import { configureStore } from "@reduxjs/toolkit";
import { questionsApi } from "../services/api/questionsApi";
import questionBookmarkSlice from "../services/slice/questionBookmarkSlice";

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    questionsBookmark: questionBookmarkSlice
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware),
});