import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import StopwatchTimer from 'react-native-animated-stopwatch-timer';
import FeedbackModal from './FeedbackModal';
import ConfirmModal from './ConfirmModal';
import { useSessions } from '../context/SessionContext';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import i18n from '../lang/i18n';
import { COLORS } from '../constants/theme';

const Stopwatch = () => {
  useKeepAwake();
  const stopwatchTimerRef = useRef(null);
  const { createSession } = useSessions();
  const { isDarkTheme } = useTheme();
  const navigation = useNavigation();

  const [isCounting, setIsCounting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  function play() {
    setShowConfirm(false);
    stopwatchTimerRef.current?.play();
    setIsCounting(true);
  }
  function pause() {
    stopwatchTimerRef.current?.pause();
    setIsCounting(false);
    setModalVisible(true);
    console.log(stopwatchTimerRef.current.getSnapshot());
  }
  function reset() {
    stopwatchTimerRef.current?.reset();
    setFeedback('');
  }

  async function save() {
    await createSession(stopwatchTimerRef.current.getSnapshot(), feedback);
    reset();
    setModalVisible(!modalVisible);
    navigation.navigate('History');
  }

  const stopWatchContainerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  const stopWatchCharStyle = isDarkTheme ? styles.darkChar : styles.lightChar;

  return (
    <>
      <StopwatchTimer
        ref={stopwatchTimerRef}
        containerStyle={[styles.stopWatchContainer, stopWatchContainerStyle]}
        textCharStyle={[styles.stopWatchChar, stopWatchCharStyle]}
        trailingZeros={2}
      />
      {showConfirm && (
        <ConfirmModal
          isVisible={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={play}
          message={i18n.t('confirmModalPrepareMessage')}
          confirmButtonMessage={i18n.t('confirmModalPrepareBtnText')}
          titleText={i18n.t('confirmModalPrepareTitleText')}
          rejectButtonMessage={i18n.t('confirmModalrejectBtnText')}
        />
      )}
      {!isCounting && (
        <FeedbackModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          stopwatchTimerRef={stopwatchTimerRef}
          feedback={feedback}
          setFeedback={setFeedback}
          onSave={save}
        />
      )}
      {isCounting ? (
        <TouchableOpacity
          style={[styles.stopButton, styles.mainButton]}
          onPress={pause}
        >
          <Text style={styles.buttonText}>
            {i18n.t('stopwatchStopButtonText')}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.startButton, styles.mainButton]}
          onPress={() => setShowConfirm(true)}
        >
          <Text style={styles.buttonText}>
            {i18n.t('stopwatchStartButtonText')}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  // Button Styles
  mainButton: {
    borderRadius: 9999,
    padding: 30,
    marginHorizontal: '15%',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  startButton: {
    backgroundColor: COLORS.brand,
  },
  stopButton: {
    backgroundColor: COLORS.accentRed,
  },
  buttonText: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'nunito-bold',
  },
  // Stopwatch styles
  stopWatchContainer: {
    borderWidth: 3,
    borderRadius: 9999,
    padding: 28,
    marginHorizontal: '15%',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  stopWatchChar: {
    fontSize: 32,
    letterSpacing: 2,
    fontFamily: 'nunito-bold',
  },
  darkContainer: { backgroundColor: '#000', borderColor: COLORS.brand },
  lightContainer: { backgroundColor: '#fff', borderColor: COLORS.freshGreen },
  darkChar: { color: COLORS.freshGreen },
  lightChar: { color: COLORS.primaryDark },
});
