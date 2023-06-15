import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import {
  VictoryChart,
  VictoryBar,
  VictoryLine,
  VictoryAxis,
} from 'victory-native';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../constants/theme';

const Chart = ({ durations, dates, chartTitle, chart2Title }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const { isDarkTheme } = useTheme();
  const bgStyle = isDarkTheme ? COLORS.calmDark : COLORS.pureWhite;
  const textStyle = !isDarkTheme ? COLORS.calmDark : COLORS.pureWhite;

  const data = durations.map((duration, index) => ({ x: index, y: duration }));

  const averageDuration =
    durations.reduce((total, duration) => total + duration, 0) /
    durations.length;
  const averageData = durations.map((duration) => averageDuration);

  const accumulatedData = durations.reduce((accumulated, duration, index) => {
    const sum = index > 0 ? accumulated[index - 1].y + duration : duration;
    accumulated.push({ x: index, y: sum });
    return accumulated;
  }, []);

  return (
    <View style={{ backgroundColor: bgStyle, flex: 1, marginTop: 10 }}>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'nunito-bold',
          marginTop: 20,
          color: textStyle,
        }}
      >
        {chartTitle}
      </Text>
      <VictoryChart
        padding={{ top: 20, bottom: 60, left: 50, right: 20 }}
        height={windowHeight / 2.5}
        width={windowWidth - 20}
        domainPadding={{ x: 20, y: 20 }}
      >
        <VictoryBar
          data={data}
          x='x'
          y='y'
          style={{
            data: {
              fill: COLORS.freshGreen,
            },
          }}
          barWidth={30}
        />
        <VictoryLine
          data={averageData}
          style={{
            data: {
              stroke: '#FF6768',
              strokeWidth: 2,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${tick} min`}
          style={{
            tickLabels: { fill: '#6C757D', fontSize: 12, padding: 5 },
            axis: { stroke: '#CED4DA' },
            grid: { stroke: '#CED4DA', strokeWidth: 0.5 },
          }}
        />
        <VictoryAxis
          tickValues={data.map((datum) => datum.x)}
          tickFormat={dates.reverse()}
          style={{
            tickLabels: { fill: '#6C757D', fontSize: 12, padding: 5 },
            axis: { stroke: '#CED4DA' },
          }}
        />
      </VictoryChart>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'nunito-bold',
          marginBottom: 20,
          color: textStyle,
        }}
      >
        {chart2Title}
      </Text>
      <VictoryChart
        padding={{ top: 0, bottom: 60, left: 50, right: 20 }}
        height={windowHeight / 2.5}
        width={windowWidth - 20}
        domainPadding={{ x: 20, y: 20 }}
      >
        <VictoryLine
          data={accumulatedData}
          style={{
            data: {
              stroke: COLORS.freshGreen,
              strokeWidth: 2,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${tick} min`}
          style={{
            tickLabels: { fill: '#6C757D', fontSize: 12, padding: 5 },
            axis: { stroke: '#CED4DA' },
            grid: { stroke: '#CED4DA', strokeWidth: 0.5 },
          }}
        />
        <VictoryAxis
          tickValues={accumulatedData.map((datum) => datum.x)}
          tickFormat={dates} // Reverse the dates array
          style={{
            tickLabels: { fill: '#6C757D', fontSize: 12, padding: 5 },
            axis: { stroke: '#CED4DA' },
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default Chart;
