import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Switch,
  Text,
  SafeAreaView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Title from '../components/Title';

import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

import i18n from '../lang/i18n';
import LanguageButtons from '../components/LanguageButtons';
import { COLORS } from '../constants/theme';

const AccountScreen = () => {
  const { logout } = useAuth();
  const [lang, setLang] = useState(i18n.locale);
  const { isDarkTheme, toggleTheme } = useTheme();

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  const textStyle = isDarkTheme ? styles.lightText : styles.darkText;

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Title style={[styles.titleText, textStyle]}>
        {i18n.t('settingsTitleText')}
      </Title>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>{i18n.t('signOutBtnText')}</Text>
      </TouchableOpacity>
      <LanguageButtons setLang={setLang} lang={lang} />

      <View style={styles.switchContainer}>
        <Text style={[textStyle, styles.langText]}>
          {i18n.t('lightThemeText')}
        </Text>
        <Switch
          trackColor={{ false: COLORS.calmGray, true: COLORS.freshGreen }}
          thumbColor={isDarkTheme ? COLORS.brand : COLORS.playfullYellow}
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
        <Text style={[textStyle, styles.langText]}>
          {i18n.t('darkThemeText')}
        </Text>
      </View>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  // title: 'Настройки',
  title: '',
  tabBarIcon: <FontAwesome name='gear' size={24} color='white' />,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.brand,
    padding: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.brand,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'nunito-bold',
    color: COLORS.pureWhite,
  },
  container: {
    flex: 1,
  },
  lightContainer: { backgroundColor: COLORS.pureWhite },
  darkContainer: { backgroundColor: COLORS.calmDark },

  switchContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    flexDirection: 'row',
  },
  lightText: { color: COLORS.pureWhite },
  darkText: { color: COLORS.calmDark },

  langContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 20,
  },
  lightText: { color: COLORS.pureWhite },
  darkText: { color: COLORS.calmDark },
  langBtn: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  darkBorder: { borderColor: COLORS.calmDark },
  lightBorder: { borderColor: COLORS.pureWhite },
  langText: {
    fontSize: 18,
    fontFamily: 'nunito-regular',
  },
  activeBtn: {
    backgroundColor: COLORS.brand,
  },
});

export default AccountScreen;
