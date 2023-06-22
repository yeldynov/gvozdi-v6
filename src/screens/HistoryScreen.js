import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSessions } from '../context/SessionContext';
import ListItem from '../components/ListItem';
import { useTheme } from '../context/ThemeContext';
import i18n from '../lang/i18n';
import Title from '../components/Title';
import { COLORS } from '../constants/theme';

const HistoryScreen = ({ navigation }) => {
  const { sessions, fetchSessions } = useSessions();
  const { isDarkTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchSessions().then(() => setIsLoading(false));
    });

    return unsubscribe;
  }, [navigation]);

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  if (isLoading)
    return (
      <View style={[styles.container, containerStyle]}>
        <Title>{i18n.t('loadingText')}</Title>
        <ActivityIndicator size='large' color={COLORS.brand} />
      </View>
    );

  if (sessions.length < 1 && !isLoading) {
    return (
      <View style={[styles.container, containerStyle]}>
        <Title>{i18n.t('historyTitleText')}</Title>
        <Text style={styles.text}>{i18n.t('cleanHistoryText')}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={sessions}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ListItem navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: { backgroundColor: COLORS.pureWhite },
  darkContainer: { backgroundColor: COLORS.calmDark },
  title: {
    paddingTop: 20,
    marginBottom: 10,
    color: COLORS.primaryDark,
    fontFamily: 'sans-serif-condensed',
    fontSize: 24,
    textAlign: 'center',
  },
  itemContainer: {
    height: 80,
    elevation: 3,
    borderColor: COLORS.calmGray,
    borderRadius: 3,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 3,
    alignItems: 'center',
  },

  text: {
    fontStyle: 'italic',
    marginTop: 30,
    marginHorizontal: 30,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    color: '#9B9B9B',
  },
});

export default HistoryScreen;
