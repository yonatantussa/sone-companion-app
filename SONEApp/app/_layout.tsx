
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="main-app-hub" options={{ title: "Main App Hub" }} />
    </Stack>
  );
}
