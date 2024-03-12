import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
GoogleSignin.configure({
  webClientId:
    "590095556137-je3gc0n5g5rl2a146cc390k8fbuoln9l.apps.googleusercontent.com",
});
export default function Login({ setUserInfo }) {
  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then((user) => {
        console.log(user);
        setUserInfo(true);
      })
      .catch((error) => console.log(error));
  };
  return (
    <View className="flex-1 bg-gray-950 flex items-center justify-center relative">
      <Image
        source={{
          uri: "https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg",
        }}
        className="h-full w-full opacity-40 absolute top-0 left-0 object-cover"
      />
      <View className="bg-gray-100 p-4 rounded-md flex items-center">
        <Text className="font-bold text-2xl">K-Movies</Text>
        <TouchableOpacity
          className="bg-blue-600 px-4 py-2 rounded-md flex flex-row space-x-2 items-center"
          onPress={onGoogleButtonPress}
        >
          <Image
            source={{
              uri: "https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png",
            }}
            className="h-8 w-8 object-contain"
          />
          <Text className="text-white font-bold text-xl">
            Sign in with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
