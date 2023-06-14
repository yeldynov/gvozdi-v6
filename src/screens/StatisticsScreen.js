import { StyleSheet, Image, View } from 'react-native';
import Title from '../components/Title';
import Statistics from '../components/Statistics';
import { useTheme } from '../context/ThemeContext';
import i18n from '../lang/i18n';
import { COLORS } from '../constants/theme';

const StatisticsScreen = () => {
  const { isDarkTheme } = useTheme();

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  return (
    <View style={[styles.container, containerStyle]}>
      <Title>{i18n.t('statisticsTitleText')}</Title>
      <Statistics />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: { backgroundColor: COLORS.pureWhite },
  darkContainer: { backgroundColor: COLORS.calmDark },
});

export default StatisticsScreen;
