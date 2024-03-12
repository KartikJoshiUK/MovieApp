import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
export default function MovieCardList({ movies, navigation }) {
  return (
    <View className="h-52 w-full p-2">
      <ScrollView className="h-full flex flex-row" horizontal>
        {movies?.map((movie) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("/Movie")}
            key={movie?.id}
            className="mx-2 bg-gray-900 rounded-xl overflow-hidden w-32"
          >
            <Image
              source={{
                uri: "https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg",
              }}
              className="w-32  h-32 object-cover"
            />
            <View className="p-2">
              <Text className="text-white">{movie?.title}</Text>
              <Text className="text-gray-300">
                {movie?.year} - {movie?.ratings}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
