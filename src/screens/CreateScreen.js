import React, { useContext } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Stopwatch from '../components/Stopwatch';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../constants/theme';

const CreateScreen = () => {
  const { isDarkTheme } = useTheme();

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Image style={styles.image} source={require('../../assets/man.png')} />
      <Text style={styles.createText}></Text>
      <Stopwatch />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  createText: {
    fontFamily: 'sans-serif-condensed',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  title: {
    alignSelf: 'center',
    color: COLORS.calmGray,
    height: '50%',
  },
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height / 2.2,
    marginTop: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  lightContainer: { backgroundColor: COLORS.pureWhite },
  darkContainer: { backgroundColor: COLORS.calmDark },
});

export default CreateScreen;
