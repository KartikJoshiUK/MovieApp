import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

export default function About() {
  return (
    <ScrollView className="h-full bg-gray-950">
      <View className="flex items-center justify-center mt-32">
        <Text className="text-white text-center font-bold text-2xl  mb-4">
          Made with ❤️ by
        </Text>
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/C5603AQFN07ChPEYGMg/profile-displayphoto-shrink_400_400/0/1641306776836?e=1715212800&v=beta&t=6C4uyWQ7rOfz_7CcPH53uJWRma0OjlgJ_vH1WHC7XLM",
          }}
          className="w-52 h-52 object-cover rounded-full mx-auto"
        />
        <Text className="text-white text-center font-bold text-2xl mt-8">
          Kartik Joshi
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://kartikjoshi.netlify.app").catch((err) =>
              console.error("An error occurred", err)
            )
          }
        >
          <Text className="text-white">View Portfolio</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
