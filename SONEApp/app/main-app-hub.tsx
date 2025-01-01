import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "@/app/(tabs)/home";
import PatientsScreen from "@/app/(tabs)/patients";
import SettingsScreen from "@/app/(tabs)/settings";

const Stack = createStackNavigator();

const MainAppHub = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="patients" component={PatientsScreen} />
        <Stack.Screen name="settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppHub;
