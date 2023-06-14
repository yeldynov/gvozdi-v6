import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Title from '../components/Title';
import { COLORS } from '../constants/theme';
import { FontAwesome } from '@expo/vector-icons';
import i18n from '../lang/i18n';
import { useTheme } from '../context/ThemeContext';

const imageUrl = 'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png';

const ContactScreen = () => {
  const { isDarkTheme } = useTheme();

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  const colorStyle = isDarkTheme ? COLORS.pureWhite : COLORS.calmDark;

  return (
    <View style={[containerStyle, { flex: 1 }]}>
      <Title>{i18n.t('contactTitleText')}</Title>
      <View style={{ margin: 20 }}>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 20,
            textAlign: 'center',
            fontFamily: 'nunito-bold',
            color: colorStyle,
          }}
        >
          {i18n.t('contactText1')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'justify',
            fontFamily: 'nunito-regular',
            color: colorStyle,
          }}
        >
          {i18n.t('contactText2')}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            textAlign: 'justify',
            fontFamily: 'nunito-regular',
            color: colorStyle,
          }}
        >
          {i18n.t('contactText3')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'justify',
            fontFamily: 'nunito-bold',
            color: colorStyle,
          }}
        >
          {i18n.t('contactText4')}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { marginTop: 50 }]}
        onPress={() => Linking.openURL('https://t.me/gvozdi_support_bot')}
      >
        <Text style={styles.buttonText}>{i18n.t('telegramButtonText')}</Text>
        <FontAwesome name='telegram' size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: 'center', marginTop: 20 }}
        onPress={() => Linking.openURL('https://bmc.link/nicocrabbb')}
      >
        <Image
          style={{
            width: 217,
            height: 60,
            borderRadius: 20,
          }}
          source={{ uri: imageUrl }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.primaryDark,
    padding: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.primaryLight,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'nunito-bold',
    color: COLORS.pureWhite,
  },
  lightContainer: { backgroundColor: COLORS.pureWhite },
  darkContainer: { backgroundColor: COLORS.calmDark },
  light: { color: COLORS.pureWhite },
  dark: { color: COLORS.calmDark },
});

export default ContactScreen;
