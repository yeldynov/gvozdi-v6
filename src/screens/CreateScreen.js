import React, { useContext } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Stopwatch from '../components/Stopwatch';

const CreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
    color: '#9B9B9B',
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
});

export default CreateScreen;
