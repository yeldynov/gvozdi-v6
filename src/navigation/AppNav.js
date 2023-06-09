import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useAuth } from '../context/AuthContext';

const AppNav = ({ handleOnLayout }) => {
  const { isLoading, userToken } = useAuth();

  if (isLoading) {
    return (
      <View
        onLayout={handleOnLayout}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <NavigationContainer onReady={handleOnLayout}>
      {userToken === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default AppNav;
