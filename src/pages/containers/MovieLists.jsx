import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function MovieLists({ movies, navigation }) {
  return (
    <View className="flex gap-4 p-4">
      {movies?.map((movie) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("/Movie")}
          key={movie?.id}
          className="flex space-x-2 flex-row bg-gray-900 rounded-md overflow-hidden"
        >
          <Image
            source={{
              uri: "https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg",
            }}
            className="h-full w-1/4 object-cover"
          />
          <View className="flex p-2 ">
            <Text className="font-bold text-white text-xl">{movie?.title}</Text>
            <View className="flex flex-row gap-2">
              <Text className="text-gray-300">{movie?.year}</Text>
              <Text className="text-gray-300">{movie?.ratings}</Text>
            </View>
            <Text className="text-white">{movie?.genre}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
