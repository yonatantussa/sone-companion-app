import React from "react";
import { View, Text, Button } from "react-native";

export default function MainAppHub({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Main App Hub</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("(tabs)/home")} />
    </View>
  );
}
