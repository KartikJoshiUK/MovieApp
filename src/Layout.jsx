import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Movie_ from "./pages/Movie_";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabRoutes from "./Routes/TabRoutes";
import { Text, View } from "react-native";
import Login from "./pages/Login";
import { enableScreens } from "react-native-screens";
enableScreens();

const Stack = createStackNavigator();

export default function Navigation() {
  const [userInfo, setUserInfo] = useState(false);
  if (!userInfo) return <Login setUserInfo={setUserInfo} />;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="/Tabs"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="/Tabs" component={TabRoutes} />
          <Stack.Screen name="/Movie" component={Movie_} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
