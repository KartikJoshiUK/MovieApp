import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function SearchList({ movies, navigation }) {
  return (
    <View className="flex space-y-1 bg-gray-800">
      {movies?.map((movie) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("/Movie", {
              imdb_id: movie?.imdb_id,
            })
          }
          key={movie?.imdb_id}
          className="flex space-x-2 flex-row bg-gray-900 overflow-hidden  items-center py-1 px-4"
        >
          <Text className="font-bold text-white">{movie?.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
