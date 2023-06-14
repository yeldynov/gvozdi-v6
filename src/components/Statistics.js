import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Text,
} from 'react-native';
import moment from 'moment';
import Title from './Title';
import Chart from './Chart';
import i18n from '../lang/i18n';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../constants/theme';
import useStats from '../hooks/useStats';

const Statistics = () => {
  const { isDarkTheme } = useTheme();
  const {
    isLoading,
    sessions,
    durationsByDate,
    getTotalTime,
    getAverage,
    getAverageDuration,
  } = useStats();

  if (sessions.length < 1 && !isLoading) {
    return (
      <Text style={styles.emptyText}>{i18n.t('cleanStatisticsText')}</Text>
    );
  }

  const totalTime = getTotalTime();
  const average = getAverage();
  const averageDuration = getAverageDuration();

  // Generate a sequence of dates for the last 7 days
  const today = moment().startOf('day');
  const dateSequence = Array.from({ length: 7 }, (_, index) =>
    today.clone().subtract(index, 'days')
  );

  const labels = dateSequence.map((date) => date.format('DD/MM'));
  const durations = labels.map((date) => durationsByDate[date] || 0); // Fill missing durations with 0

  const averageLineDataset = {
    data: Array(labels.length).fill(averageDuration),
    color: (opacity = 1) => `rgba(255, 0,0, ${opacity})`,
  };

  const accumulatedData = durations
    .slice()
    .reverse()
    .reduce((acc, duration, index) => {
      if (index === 0) {
        acc.push(duration);
      } else {
        acc.push(acc[index - 1] + duration);
      }
      return acc;
    }, []);

  const textStyle = isDarkTheme ? styles.darkText : styles.lightText;

  return (
    <ScrollView>
      {isLoading ? (
        <View>
          <ActivityIndicator size='large' color={COLORS.brand} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={[styles.text, textStyle]}>
            {i18n.t('statisticsTotal')} {sessions.length}
            {i18n.t('statisticsSessionsForText')} {durations.length}
            {i18n.t('statisticsDaysText')}
          </Text>
          <Text style={[styles.text, textStyle]}>
            {i18n.t('statisticsAllText')} {moment.utc(totalTime).format('hh')}
            {i18n.t('statisticsHourText')}
            {moment(totalTime).format('mm')} {i18n.t('statisticsMinText')}
            {moment(totalTime).format('ss')} {i18n.t('statisticSecText')}
          </Text>
          <Text style={[styles.text, textStyle]}>
            {i18n.t('statisticsAveragePerSessionText')} {average}
            {i18n.t('statisticsMinText')}
          </Text>
          <Text style={[styles.text, textStyle]}>
            {i18n.t('statisticsAveragePerDayText')} {averageDuration}
            {i18n.t('statisticsMinText')}
          </Text>

          <Title h4>{i18n.t('statisticsLastTimeText')}</Title>
          <Text style={[styles.text, textStyle]} h5>
            {i18n.t('statisticsTimeText')}
            {moment.duration(sessions[0]?.duration).asMinutes().toFixed(0)}
            {i18n.t('statisticsMinText')}
            {moment(sessions[0]?.duration).format('ss')}
            {i18n.t('statisticSecText')}
          </Text>
          <Text style={[styles.text, textStyle]} h5>
            {i18n.t('statisticsDateText')}
            {moment(sessions[0]?.date).format('DD/MM/YYYY')}
          </Text>

          <Chart
            labels={labels}
            averageLineDataset={averageLineDataset}
            durations={durations}
            accumulatedData={accumulatedData}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 20,
  },
  text: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 16,
  },
  darkText: { color: '#000' },
  darkText: { color: '#fff' },
  emptyText: {
    fontStyle: 'italic',
    marginTop: 30,
    marginHorizontal: 30,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    color: '#9B9B9B',
  },
});
