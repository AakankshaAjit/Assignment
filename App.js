import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import MovieList from "./components/MovieList";

export default function App() {

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-900 dark:bg-black">
      <View className={"flex-row w-full gap-5"}>
        <Text className="text-red-700 my-5 flex justify-center items-center text-2xl font-bold">
       NETFLIX
        </Text>

      </View>
      <MovieList />
    </SafeAreaView>
  );
}
