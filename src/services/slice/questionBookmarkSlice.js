import { createSlice } from "@reduxjs/toolkit";

const questionBookmarkSlice = createSlice({
  name: "questionsBookmark",
  initialState: [],
  reducers: {
    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      const existingQuestion = state.find(
        (question) => question.question_id === newQuestion.question_id
      );
      if (!existingQuestion) {
        state.push(newQuestion);
      }
    },
    removeQuestion: (state, action) => {
      const questionId = action.payload;
      return state.filter((question) => question.question_id !== questionId);
    },
  },
});

export const { addQuestion, removeQuestion } = questionBookmarkSlice.actions;

export default questionBookmarkSlice.reducer;
