import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../constants/theme';
import i18n from '../lang/i18n';

const GuideScreen = () => {
  const { isDarkTheme } = useTheme();

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  const colorStyle = isDarkTheme ? COLORS.pureWhite : COLORS.calmDark;

  return (
    <View style={[styles.container, containerStyle]}>
      <Title>{i18n.t('instructionTitleText')}</Title>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.image} source={require('../../assets/cat2.png')} />
      </View>
      <FlatList
        data={[
          { key: i18n.t('step1Text') },
          { key: i18n.t('step2Text') },
          { key: i18n.t('step3Text') },
          { key: i18n.t('step4Text') },
          { key: i18n.t('step5Text') },
          { key: i18n.t('step6Text') },
          { key: i18n.t('step7Text') },
          { key: i18n.t('step8Text') },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons
                  name='foot-print'
                  size={26}
                  color={colorStyle}
                />
                <MaterialCommunityIcons
                  name='foot-print'
                  size={26}
                  color={colorStyle}
                  style={{ transform: [{ scaleX: -1 }] }}
                />
              </View>
              <Text style={[styles.item__text, { color: colorStyle }]}>
                {item.key}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    margin: 10,
  },

  item__text: {
    fontFamily: 'nunito-regular',
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    objectFit: 'contain',
  },
  lightContainer: { backgroundColor: COLORS.pureWhite },
  darkContainer: { backgroundColor: COLORS.calmDark },
  light: { color: COLORS.pureWhite },
  dark: { color: COLORS.calmDark },
});

export default GuideScreen;
