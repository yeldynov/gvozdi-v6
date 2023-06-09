import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useSessions } from '../context/SessionContext';
import ListItem from '../components/ListItem';
import Title from '../components/Title';

const HistoryScreen = ({ navigation }) => {
  const { sessions, fetchSessions } = useSessions();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSessions().then(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <View>
        <Text>Loading Sessions...</Text>
        <ActivityIndicator />
      </View>
    );

  if (sessions.length < 1 && !isLoading) {
    return (
      <View>
        <Text>Clean History</Text>
        <Text>No Sessions in list. Lets begin! </Text>
      </View>
    );
  }

  return (
    <View>
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

export default HistoryScreen;
