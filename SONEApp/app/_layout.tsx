<<<<<<< HEAD
<<<<<<< Updated upstream
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
=======
import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from '../providers/AuthProvider';
>>>>>>> Stashed changes
=======

import React from "react";
import { Stack } from "expo-router";
>>>>>>> screens-and-buttons

export default function RootLayout() {
  return (
<<<<<<< HEAD
<<<<<<< Updated upstream
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
=======
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth-screen" options={{ title: "Auth" }} />
      </Stack>
    </AuthProvider>
>>>>>>> Stashed changes
=======
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="main-app-hub" options={{ title: "Main App Hub" }} />
    </Stack>
>>>>>>> screens-and-buttons
  );
}
