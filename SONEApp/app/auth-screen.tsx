import React from 'react';
import  Auth  from '@/components/LoginPage';
import { router } from 'expo-router';
import { useAuth0 } from 'react-native-auth0';

export default function AuthScreen() {
  const { authorize } = useAuth0();
  
  const handleLogin = async () => {
    try {
      await authorize();
      router.replace('/home');
    } catch (e) {
      console.error(e);
    }
  };

  return <Auth onLogin={handleLogin} />;
}

