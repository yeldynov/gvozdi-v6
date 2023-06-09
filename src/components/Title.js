import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/theme';

const Title = ({ children, customStyles }) => {
  return <Text style={[styles.title, customStyles]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontFamily: 'playfair-bold',
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.primaryDark,
  },
});
