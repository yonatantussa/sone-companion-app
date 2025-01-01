import React from "react";
import { View, Text, Button } from "react-native";

const SettingsScreen = ({ navigation }: { navigation: any }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Settings Screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate("home")} />
    <Button title="Go to Patients" onPress={() => navigation.navigate("patients")} />
  </View>
);

export default SettingsScreen;
