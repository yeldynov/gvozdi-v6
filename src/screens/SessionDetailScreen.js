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
import { useTheme } from '../context/ThemeContext';
import i18n from '../lang/i18n';
import { COLORS } from '../constants/theme';

const SessionDetailScreen = ({ navigation, route }) => {
  const id = route.params?._id;
  const { sessions, deleteSession } = useSessions();
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkTheme } = useTheme();

  const bgContainerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  const textStyle = isDarkTheme ? styles.darkText : styles.lightText;

  function removeSession() {
    deleteSession(id);
    navigation.navigate('History');
  }

  const session = sessions.find((s) => s._id === id);

  return (
    <SafeAreaView style={[styles.container, bgContainerStyle]}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/details_3.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textGroup}>
          <Text style={[styles.textKey, textStyle]}>
            {i18n.t('dateKeyText')}
          </Text>
          <Text style={[styles.textValue, textStyle]}>
            {moment(session?.date).format('DD/MM/YYYY hh:mm')}
          </Text>
        </View>
        <View style={styles.textGroup}>
          <Text style={[styles.textKey, textStyle]}>
            {i18n.t('durationKeyText')}
          </Text>
          <Text style={[styles.textValue, textStyle]}>
            {moment.utc(session?.duration).format('mm:ss')}
          </Text>
        </View>
        <View style={styles.feedbackGroup}>
          <Text style={[styles.textKey, textStyle]}>
            {i18n.t('feedbackKeyText')}
          </Text>
          <Text style={[styles.textValue, textStyle]}>{session?.feedback}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={styles.removeBtn}
        >
          <Text style={styles.removeText}>{i18n.t('removeRecordBtnText')}</Text>
          <Octicons name='trash' size={36} color='red' />
        </TouchableOpacity>
        <ConfirmModal
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          onConfirm={removeSession}
          message={i18n.t('confirmModalMessage')}
          confirmButtonMessage={i18n.t('confirmModalBtnMessage')}
          titleText={i18n.t('confirmModalTitleText')}
          rejectButtonMessage={i18n.t('confirmModalrejectBtnText')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  lightContainer: { backgroundColor: COLORS.pureWhite },
  darkContainer: { backgroundColor: COLORS.calmDark },
  lightText: { color: COLORS.calmDark },
  darkText: { color: COLORS.pureWhite },
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
    borderColor: COLORS.accentRed,
    borderRadius: 24,
    marginTop: 30,
  },
  removeText: {
    marginRight: 10,
    fontSize: 18,
    fontFamily: 'nunito-bold',
    color: COLORS.accentRed,
  },
  textKey: {
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'nunito-bold',
  },
  textValue: {
    color: COLORS.primaryDark,
    fontFamily: 'nunito-regular',
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
