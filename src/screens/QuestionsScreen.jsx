import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useGetQuestionsByTagQuery } from "../services/api/questionsApi";
import QuestionCard from "../components/QuestionCard";

const QuestionsScreen = ({ route }) => {
  const tag = route.params?.tag || "Unknown";
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [allQuestions, setAllQuestions] = useState([]);
  const {
    data: questions,
    isLoading,
    refetch,
  } = useGetQuestionsByTagQuery({ tag, currentPage });

  const totalQuestions = questions?.quota_max || 0;
  const questionsPerPage = 30;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      setIsFetchingMore(true);
    }
  };

  useEffect(() => {
    if (questions?.items) {
      setAllQuestions((prevQuestions) => [
        ...prevQuestions,
        ...questions.items,
      ]);
    }
  }, [questions]);

  useEffect(() => {
    refetch().then(() => {
      setIsFetchingMore(false);
    });
  }, [currentPage, refetch]);

  return (
    <SafeAreaView>
      <ScrollView>
        {allQuestions.map((question) => (
          <View key={question.question_id}>
            <QuestionCard question={question} />
          </View>
        ))}
        {isFetchingMore && <ActivityIndicator size="small" color="#0000ff" />}
        {currentPage < totalPages && (
          <TouchableOpacity onPress={handleLoadMore}>
            <View className="flex-row justify-center items-center p-2 bg-slate-300 mx-3 mb-3 rounded-md">
              <Text className="text-gray-600">Load More</Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
      {isLoading && !isFetchingMore && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </SafeAreaView>
  );
};

export default QuestionsScreen;
