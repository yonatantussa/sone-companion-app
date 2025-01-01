import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }: { navigation: any }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home Screen</Text>
    <Button title="Go to Patients" onPress={() => navigation.navigate("patients")} />
    <Button title="Go to Settings" onPress={() => navigation.navigate("settings")} />
  </View>
);

export default HomeScreen;
