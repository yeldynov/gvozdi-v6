import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

const Title = ({ children, customStyles }) => {
  const { isDarkTheme } = useTheme();

  const textColor = isDarkTheme ? styles.lightText : styles.darkText;

  return (
    <Text style={[styles.title, textColor, customStyles]}>{children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    fontSize: 24,
    fontFamily: 'nunito-bold',
    textAlign: 'center',
  },
  darkText: { color: COLORS.calmDark },
  lightText: { color: COLORS.freshGreen },
});
