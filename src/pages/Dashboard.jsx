import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MovieCardList from "./containers/MovieCardList";
import React, { useState } from "react";
import { trendingMovies } from "../assets/content/trending.json";
import { popularMovies } from "../assets/content/popular.json";
import MovieLists from "./containers/MovieLists";
const MediaType = {
  MOVIE: "Movie",
  SERIES: "Series",
};
export default function Dashboard({ navigation }) {
  const [mediaType, setMediaType] = useState(MediaType.MOVIE);
  return (
    <ScrollView className="h-full bg-gray-950 py-4">
      <View className="flex flex-row space-x-2 px-4">
        <TouchableOpacity
          onPress={() =>
            setMediaType((prev) => {
              if (prev !== MediaType.MOVIE) return MediaType?.MOVIE;
              return null;
            })
          }
          className={`bg-gray-900 px-4 py-2 rounded-xl ${
            mediaType === MediaType.MOVIE ? " bg-gray-100" : ""
          }`}
        >
          <Text
            className={`text-white text-lg ${
              mediaType === MediaType.MOVIE ? " text-black font-bold" : ""
            }`}
          >
            MOVIE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setMediaType((prev) => {
              if (prev !== MediaType.SERIES) return MediaType?.SERIES;
              return null;
            })
          }
          className={`bg-gray-900 px-4 py-2 rounded-xl ${
            mediaType === MediaType.SERIES ? " bg-gray-100" : ""
          }`}
        >
          <Text
            className={`text-white text-lg ${
              mediaType === MediaType.SERIES ? " text-black font-bold" : ""
            }`}
          >
            SERIES
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-white px-6 text-2xl font-bold mt-2">FEATURED</Text>
      <MovieCardList movies={popularMovies} navigation={navigation} />
      <Text className="text-white px-6 text-2xl font-bold mt-2">TRENDING</Text>
      <MovieLists movies={trendingMovies} navigation={navigation} />
      <View className="py-4" />
    </ScrollView>
  );
}
