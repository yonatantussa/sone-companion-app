import React from "react";
import { View, Text, Button } from "react-native";

const PatientsScreen = ({ navigation }: { navigation: any }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Patients Screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate("home")} />
    <Button title="Go to Settings" onPress={() => navigation.navigate("settings")} />
  </View>
);

export default PatientsScreen;
