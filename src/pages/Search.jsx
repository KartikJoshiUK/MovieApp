import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { trendingMovies } from "../assets/content/trending.json";
import SearchList from "./containers/SearchLists";
import axios from "axios";
export default function Search({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async () => {
    if (searchText?.length === 0) {
      setSearchResults([]);
      return;
    }
    const options = {
      method: "GET",
      url: `https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${searchText}/`,
      headers: {
        "X-RapidAPI-Key": "a2626d7cbemshb49f8648573c047p1be01ajsn8c54362c4b56",
        "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response?.data?.results);
      setSearchResults(response?.data?.results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ScrollView className="h-full bg-gray-950 py-8">
      <View className="flex flex-row space-x-1 p-2 h-16">
        <TextInput
          className="bg-gray-900 p-2 text-white flex-1 rounded-l-md"
          placeholder="Search movie..."
          placeholderTextColor={"gray"}
          value={searchText}
          onChangeText={(newText) => setSearchText(newText)}
        />
        <Pressable
          className="h-full  flex items-center justify-center bg-gray-900 rounded-r-md px-3"
          onPress={handleSearch}
        >
          <Text className="text-white font-bold">Search</Text>
        </Pressable>
      </View>
      <SearchList movies={searchResults} navigation={navigation} />
    </ScrollView>
  );
}
