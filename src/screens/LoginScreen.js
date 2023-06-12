import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { COLORS } from '../constants/theme';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '@react-navigation/native';
import i18n from '../lang/i18n';
import LanguageButtons from '../components/LanguageButtons';

const LoginScreen = ({ navigation }) => {
  const { login, error, setError } = useAuth();
  const [lang, setLang] = useState(i18n.locale);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { isDarkTheme } = useTheme();
  // const isDarkTheme = true;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setError('');
    });

    return unsubscribe;
  }, [navigation]);

  const containerStyle = isDarkTheme ? styles.darkBg : styles.lightBg;
  const textStyle = isDarkTheme ? styles.light : styles.dark;

  return (
    <KeyboardAvoidingView
      behavior='height'
      enabled='false'
      style={[styles.container, containerStyle]}
    >
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={styles.image}
            source={require('../../assets/man.png')}
          />
        </View>
        <Text style={[styles.text, textStyle]}>
          {i18n.t('signInHeaderText')}
        </Text>
        <InputField
          label={'Email'}
          icon={
            <MaterialIcons
              name='alternate-email'
              size={20}
              color={COLORS.calmGray}
            />
          }
          keyboardType='email-address'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputField
          label={i18n.t('passwordText')}
          icon={
            <Ionicons
              name='ios-lock-closed-outline'
              size={20}
              color={COLORS.calmGray}
            />
          }
          inputType='password'
          // fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <CustomButton
          disabled={!email || !password}
          label={i18n.t('signInBtnText')}
          onPress={() => login(email, password)}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.linkContainer}>
          <Text style={[textStyle, { fontFamily: 'nunito-regular' }]}>
            {i18n.t('dontHaveLinkText')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
          >
            <Text style={styles.link}>{i18n.t('registerText')}</Text>
          </TouchableOpacity>
        </View>
        <LanguageButtons lang={lang} setLang={setLang} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  lightBg: { backgroundColor: COLORS.pureWhite },
  darkBg: { backgroundColor: COLORS.calmDark },
  light: { color: COLORS.pureWhite },
  dark: { color: COLORS.calmDark },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'nunito-bold',
    fontSize: 28,
    marginBottom: 20,
    marginTop: 10,
  },
  image: { width: 200, height: 200, objectFit: 'contain' },
  error: {
    color: COLORS.accentRed,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'nunito-bold',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center',
    marginBottom: 30,
    fontFamily: 'nunito-regular',
  },
  link: {
    color: COLORS.brand,
    fontFamily: 'nunito-bold',
  },
});

export default LoginScreen;
