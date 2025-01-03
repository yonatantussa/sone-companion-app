import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useAuth0 } from 'react-native-auth0';
import { router } from 'expo-router';

export default function AuthScreen() {
  const { authorize, clearSession, user, error, isLoading } = useAuth0();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      setIsAuthenticating(true);
      await authorize();
      router.replace('/home');
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
          source={require('@/assets/images/react-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome to SONE</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={login}
          loading={isAuthenticating}
          disabled={isAuthenticating}
          style={styles.button}
        >
          Sign In
        </Button>
        <Button
          mode="outlined"
          onPress={login}
          disabled={isAuthenticating}
          style={[styles.button, styles.signupButton]}
        >
          Sign Up
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
  formContainer: {
    width: '100%',
    marginTop: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    padding: 8,
  },
  signupButton: {
    marginTop: 8,
  },
});
