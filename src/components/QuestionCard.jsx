import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { handleOpenLink } from "../utils/linkOpenBrowser";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestion,
  removeQuestion,
} from "../services/slice/questionBookmarkSlice";

export default function QuestionCard({ question }) {
  const dispatch = useDispatch();
  const bookmarkQuestions = useSelector((state) => state.questionsBookmark);

  const handleAddQuestion = (question) => {
    dispatch(addQuestion(question));
  };

  const handleRemoveQuestion = (questionId) => {
    dispatch(removeQuestion(questionId));
  };
  const isBookmarked = bookmarkQuestions.some(
    (q) => q.question_id === question.question_id
  );
  return (
    <TouchableOpacity
      className="border-y-2 border-gray-200 bg-white px-2 py-2"
      onPress={() => handleOpenLink(question.link)}
    >
      <View className="flex-row justify-between">
        <View className="flex-row items-center space-x-2">
          <Text>1 Vote</Text>
          <Text className="text-[#2F6F44] border border-[#2F6F44] p-1 rounded-md">
            {question.answer_count} Answer
          </Text>
          <Text className="text-gray-400">{question.view_count} Views</Text>
        </View>
        {isBookmarked ? (
          <TouchableOpacity
            onPress={() => handleRemoveQuestion(question.question_id)}
          >
            <Icon name={"bookmark"} size={20} color={"black"} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleAddQuestion(question)}>
            <Icon name={"bookmark-outline"} size={20} color={"black"} />
          </TouchableOpacity>
        )}
      </View>
      <Text className="text-[#4D96FB] font-semibold">{question.title}</Text>
      <View className="flex-row flex-wrap items-center gap-x-2 gap-y-2 mt-1">
        {question.tags &&
          question.tags.map((tag) => {
            return (
              <Text
                key={tag}
                className="bg-blue-100 text-blue-500 p-1 rounded-md"
              >
                {tag}
              </Text>
            );
          })}
      </View>
    </TouchableOpacity>
  );
}
