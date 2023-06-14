import { useEffect, useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { COLORS } from '../constants/theme';
import { useAuth } from '../context/AuthContext';
import LanguageButtons from '../components/LanguageButtons';
import i18n from '../lang/i18n';
import { useTheme } from '../context/ThemeContext';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [lang, setLang] = useState(i18n.locale);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const { register, error, setError } = useAuth();
  const { isDarkTheme } = useTheme();

  const submit = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match, try again.');
      return;
    }
    register(email, password);
  };

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
            source={require('../../assets/girl.png')}
          />
        </View>
        <Text style={[styles.text, textStyle]}>
          {i18n.t('signUpHeaderText')}
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
        <InputField
          label={i18n.t('confirmPasswordText')}
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
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <CustomButton
          disabled={!email || !password}
          label={i18n.t('signUpBtnText')}
          onPress={submit}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.linkContainer}>
          <Text style={[textStyle, { fontFamily: 'nunito-regular' }]}>
            {i18n.t('alreadyHaveLinkText')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={styles.link}>{i18n.t('signinText')}</Text>
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

export default RegisterScreen;
