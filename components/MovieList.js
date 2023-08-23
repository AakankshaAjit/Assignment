import * as React from "react";
import { FlatList } from "react-native";
import  movies  from "../movies.json";
import MovieCard from "./MovieCard";

export default function MovieList() {
  return (
    <FlatList
      data={movies}
      keyExtractor={(movie) => movie.id}
      renderItem={({ item }) => <MovieCard {...item} />}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
    />
  );
}
