import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { COLORS } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const { register, error, setError } = useContext(AuthContext);

  const submit = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match, try again.');
      return;
    }
    register(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ width: 200, height: 200, objectFit: 'contain' }}
            source={require('../../assets/man.png')}
          />
        </View>
        <Text
          style={{
            fontFamily: 'nunito-bold',
            fontSize: 28,
            color: '#333',
            marginBottom: 30,
          }}
        >
          Register
        </Text>
        <InputField
          label={'Email'}
          icon={<MaterialIcons name='alternate-email' size={20} color='#666' />}
          keyboardType='email-address'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputField
          label={'Password'}
          icon={
            <Ionicons name='ios-lock-closed-outline' size={20} color='#666' />
          }
          inputType='password'
          // fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons name='ios-lock-closed-outline' size={20} color='#666' />
          }
          inputType='password'
          // fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {/* <CustomButton label='Login' onPress={() => register(email, password)} /> */}
        <CustomButton
          disabled={!email || !password || !confirmPassword}
          label='Register'
          onPress={submit}
        />
        {error && (
          <Text
            style={{
              color: COLORS.accentRed,
              textAlign: 'center',
              marginBottom: 10,
              fontFamily: 'nunito-bold',
            }}
          >
            {error}
          </Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            justifyContent: 'center',
            marginBottom: 30,
          }}
        >
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text
              style={{
                color: COLORS.brand,
                fontFamily: 'nunito-bold',
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
