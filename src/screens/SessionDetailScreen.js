import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import moment from 'moment';
import { Octicons } from '@expo/vector-icons';
import ConfirmModal from '../components/ConfirmModal';
import { useSessions } from '../context/SessionContext';

const SessionDetailScreen = ({ navigation, route }) => {
  const { sessions, deleteSession } = useSessions();
  const id = route.params?._id;
  const [isVisible, setIsVisible] = useState(false);

  function removeSession() {
    deleteSession(id);
    navigation.navigate('History');
  }

  const session = sessions.find((s) => s._id === id);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/details_3.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.outerContainer}>
          <View style={styles.textGroup}>
            <Text style={styles.textKey}>{'Date: '}</Text>
            <Text style={styles.textValue}>
              {moment(session?.date).format('DD/MM/YYYY hh:mm')}
            </Text>
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.textKey}>{'Duration: '}</Text>
            <Text style={styles.textValue}>
              {moment.utc(session?.duration).format('mm:ss')}
            </Text>
          </View>
          <View style={styles.feedbackGroup}>
            <Text style={styles.textKey}>{'Feedback: '}</Text>
            <Text style={styles.textValue}>{session?.feedback}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            style={styles.removeBtn}
          >
            <Text style={styles.removeText}>Remove Session</Text>
            <Octicons name='trash' size={36} color='red' />
          </TouchableOpacity>
          <ConfirmModal
            isVisible={isVisible}
            onClose={() => setIsVisible(false)}
            onConfirm={removeSession}
            message={'Are you sure you want to remove this session?'}
            confirmButtonMessage={'Delete'}
            titleText={'Confirmation'}
            rejectButtonMessage={'Back'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  lightContainer: { backgroundColor: '#FFFFFF' },
  darkContainer: { backgroundColor: '#1E1E1E' },
  outerContainer: {
    marginHorizontal: 40,
  },
  image: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  removeBtn: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#FF3333',
    borderRadius: 24,
    marginTop: 30,
  },
  removeText: {
    marginRight: 10,
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    color: '#FF3333',
  },
  textKey: {
    fontWeight: 'bold',
    // color: '#002C7D',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'sans-serif-condensed',
  },
  textValue: {
    color: '#002C7D',
    fontFamily: 'sans-serif-condensed',
    fontSize: 18,
    textAlign: 'justify',
  },
  textGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  feedbackGroup: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SessionDetailScreen;
