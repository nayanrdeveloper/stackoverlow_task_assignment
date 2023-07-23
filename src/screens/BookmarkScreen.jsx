import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import QuestionCard from "../components/QuestionCard";

export default function BookmarkScreen() {
  const questions = useSelector((state) => state.questionsBookmark);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {questions &&
          questions.map((question) => {
            return (
              <View key={question.question_id}>
                <QuestionCard question={question} />
              </View>
            );
          })}
      </ScrollView>
      {!questions && (
        <View className="flex-row justify-center items-center text-center mt-10">
          <Text className="text-xl text-gray-600 font-semibold">
            No any questions in Bookmark
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
