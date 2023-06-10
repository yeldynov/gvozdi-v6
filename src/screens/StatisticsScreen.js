import { StyleSheet, Image, View } from 'react-native';
import Title from '../components/Title';
import Statistics from '../components/Statistics';
// import i18n from '../../i18n/i18n';
// import { ThemeContext } from '../context/ThemeContext';

const StatisticsScreen = () => {
  // const { isDarkTheme } = useContext(ThemeContext);
  const isDarkTheme = false;

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  return (
    <View style={[styles.container, containerStyle]}>
      <Title>Statistics</Title>
      <Statistics />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: { backgroundColor: '#FFFFFF' },
  darkContainer: { backgroundColor: '#1E1E1E' },
});

export default StatisticsScreen;
