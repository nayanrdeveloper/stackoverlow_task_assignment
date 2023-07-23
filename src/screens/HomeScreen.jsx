import { View, Text } from "react-native";
import React from "react";
import { useGetQuestionsByTagQuery } from "../services/api/questionApi";

export default function HomeScreen({ route }) {
  const framework = route.params?.tag || "Unknown";
  const { data, error, isLoading } = useGetQuestionsByTagQuery();
  console.log(data && data);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>Tag are {framework}</Text>
    </View>
  );
}
