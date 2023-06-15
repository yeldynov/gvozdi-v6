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
import i18n from '../lang/i18n';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../constants/theme';
import useStats from '../hooks/useStats';
import Chart from './Chart';

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
  const durations = labels.map((date) => durationsByDate[date] || 0);

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
            chartTitle={i18n.t('chartTitle')}
            chart2Title={i18n.t('chart2Title')}
            dates={labels}
            durations={durations.reverse()}
            color={COLORS.primaryDark}
            bgColor={COLORS.primaryLight}
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
    fontFamily: 'nunito-regular',
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
    fontFamily: 'nunito-regular',
    color: '#9B9B9B',
  },
});
