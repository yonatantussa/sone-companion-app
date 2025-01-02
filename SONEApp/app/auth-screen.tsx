import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useAuth0 } from 'react-native-auth0';
import { router } from 'expo-router';

export default function AuthScreen() {
  const { authorize, clearSession, user, error, isLoading } = useAuth0();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const login = async () => {
    try {
      setIsAuthenticating(true);
      await authorize();
      router.replace('/auth-screen');
    } catch (e) {
      console.error(e);
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/react-logo.png')} // Add your logo image
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome to SONE</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={login}
          loading={isAuthenticating}
          disabled={isAuthenticating}
          style={styles.button}
        >
          Sign In
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 24,
  },
  button: {
    padding: 8,
  },
});
