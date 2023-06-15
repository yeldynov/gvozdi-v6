import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../constants/theme';
// import i18n from '../../i18n/i18n';

const Chart = ({ labels, durations, accumulatedData }) => {
  const { isDarkTheme } = useTheme();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const daysChartData = {
    labels,
    datasets: [
      {
        data: durations,
      },
    ],
  };

  const accumulatedChartData = {
    labels: labels.slice().reverse(),
    datasets: [
      {
        data: accumulatedData,
      },
    ],
  };

  if (!daysChartData || !accumulatedChartData) return null;

  const titleStyle = isDarkTheme ? styles.darkTitle : styles.lightTitle;
  const bgGradientFromStyle = isDarkTheme ? '#555555' : '#f1f1f1';
  const chartColorStyle = isDarkTheme
    ? COLORS.playfullYellow
    : COLORS.primaryDark;

  return (
    <View>
      <Text style={[styles.chartTitle, titleStyle]}>{'Stats per day'}</Text>
      <BarChart
        data={daysChartData}
        width={windowWidth - 50}
        height={windowHeight / 2.5}
        yAxisSuffix={'min'}
        xAxisLabelRotation={45}
        chartConfig={{
          backgroundGradientFrom: bgGradientFromStyle,
          backgroundGradientTo: bgGradientFromStyle,
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0.5,
          barPercentage: 0.8,
          decimalPlaces: 0,
          labelColor: () => 'green',
          color: () => chartColorStyle,
          style: {
            fontSize: 8,
          },
        }}
      />
      <Text style={[styles.chartTitle, titleStyle]}>{'Accumulated Total'}</Text>
      <LineChart
        data={accumulatedChartData}
        width={Dimensions.get('window').width} // Adjust the width of the chart
        height={Dimensions.get('window').height / 2.5} // Adjust the height of the chart
        yAxisSuffix={'min'}
        chartConfig={{
          backgroundGradientFrom: bgGradientFromStyle,
          backgroundGradientTo: bgGradientFromStyle,
          decimalPlaces: 0, // Number of decimal places in Y-axis labels
          color: () => chartColorStyle,
          style: {
            borderRadius: 16,
          },
        }}
        bezier // Smooth line chart
        withHorizontalLabels={true} // Enable horizontal labels
        xLabelsOffset={0} // Adjust horizontal labels offset
        fromZero={true} // Start the Y-axis from zero
        style={{
          xAxisLabelRotation: 45, // Rotate the X-axis labels by 45 degrees
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
    fontFamily: 'sans-serif-condensed',
  },
  darkTitle: { color: '#00A896' },
  lightTitle: { color: '#002C7D' },
});

export default Chart;
