import * as React from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
// import { products } from "../products";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function MovieCard({

  poster_path,
  title,
  original_title,overview
}) {
  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme();



  return (
    <View className={"w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5"}>
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original${poster_path}` }}
          className={"w-full h-72"}
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5">
        <Text className={"text-sm text-black/60 dark:text-white/70"}>
          {original_title}
        </Text>
        <Text className={"text-lg font-semibold dark:text-white"}>{title}</Text>

        <Text
          numberOfLines={2}
          className={"text-sm text-black/60 dark:text-white/70"}
        >
          {overview}
        </Text>
        <TouchableOpacity className="flex-row justify-center rounded-full bg-black/90 dark:bg-white/90 p-3 w-10/12 self-center mt-5">
          <Text className="text-white dark:text-black font-bold">
            Add To Wishlist
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
