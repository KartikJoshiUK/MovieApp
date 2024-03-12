import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function Movie_({ navigation, route }) {
  const [movieData, setMovieData] = useState(null);
  const fetchData = async (imdb_id) => {
    const options = {
      method: "GET",
      url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${imdb_id}/`,
      headers: {
        "X-RapidAPI-Key": "a2626d7cbemshb49f8648573c047p1be01ajsn8c54362c4b56",
        "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response?.data?.results);
      setMovieData(response?.data?.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (route.params?.imdb_id) {
      fetchData(route.params.imdb_id);
    }
  }, [route.params?.imdb_id]);
  return (
    <ScrollView className="h-full bg-gray-950 relative">
      <Image
        source={{
          uri: movieData?.image_url,
        }}
        className="w-full h-96 object-cover"
      />
      <View className="p-4 flex space-y-2">
        <Text className="text-gray-300 capitalize">{movieData?.type}</Text>
        <Text className="text-white text-2xl font-bold">
          {movieData?.title}
        </Text>
        <Text className="text-gray-300">
          Year: {movieData?.year} - Rating: {movieData?.rating}
        </Text>
        <Text className="text-white">Rated: {movieData?.content_rating}</Text>
        <Text className="text-gray-300">Release : {movieData?.release}</Text>
        <Text className="text-white font-semibold">
          GENRE: {movieData?.gen?.map((gen) => gen?.genre).join(", ")}
        </Text>
        <Text className="text-gray-300">
          Movie Length : {movieData?.movie_length} mins
        </Text>
        <Text className="text-white">
          <Text className="font-bold">PLOT: </Text>
          {movieData?.plot}
        </Text>
        <Text className="text-white font-semibold">
          <Text className="font-bold">Topics: </Text>{" "}
          {movieData?.keywords?.map((keyword) => keyword?.keyword).join(", ")}
        </Text>
        <Text className="text-white">
          <Text className="font-bold">DESCRIPTION: </Text>
          {movieData?.description}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        className="absolute top-6 left-2 bg-white w-8 h-8 flex items-center justify-center rounded-full"
      >
        <FontAwesome name="chevron-left" />
      </TouchableOpacity>
    </ScrollView>
  );
}
