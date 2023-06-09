import 'react-native-gesture-handler';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import { SessionProvider } from './src/context/SessionContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'playfair-bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
    'playfair-medium': require('./assets/fonts/PlayfairDisplay-Medium.ttf'),
    'playfair-regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <SessionProvider>
        <AppNav handleOnLayout={onLayoutRootView} />
      </SessionProvider>
    </AuthProvider>
  );
}
