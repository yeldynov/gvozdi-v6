import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import moment from 'moment';
import uri from '../../assets/icons/icon5.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../constants/theme';

function cutFeedback(str) {
  if (str.length <= 20) return str;
  else return str.substring(0, 25) + '...';
}

const ListItem = ({ item, navigation }) => {
  const { isDarkTheme } = useTheme();

  const itemDateStyle = isDarkTheme
    ? styles.darkItemDate
    : styles.lightItemDate;

  const itemContainerStyle = isDarkTheme
    ? styles.darkItemContainer
    : styles.lightItemContainer;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SessionDetails', { _id: item._id });
      }}
      style={[styles.itemContainer, itemContainerStyle]}
    >
      <Image style={styles.thumbnail} source={uri} />
      <View style={styles.metaDataContainer}>
        <View style={styles.metaDataContent}>
          <Text style={styles.feedback}>{cutFeedback(item.feedback)}</Text>
          <Text style={[styles.date, itemDateStyle]}>
            {moment(item.date).format('DD/MM/YY')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  lightItemContainer: { backgroundColor: COLORS.pureWhite },
  darkItemContainer: { backgroundColor: COLORS.gray },
  itemContainer: {
    height: 80,
    elevation: 10,
    borderRadius: 3,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 3,
    alignItems: 'center',
  },
  metaDataContainer: {
    flex: 1,
  },
  thumbnail: {
    marginLeft: 10,
    resizeMode: 'contain',
    height: 50,
    width: 50,
    opacity: 1,
  },
  metaDataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  feedback: {
    fontSize: 18,
    fontFamily: 'nunito-bold',
    color: COLORS.freshGreen,
  },
  date: {
    fontSize: 16,
    fontFamily: 'nunito-regular',
  },
  darkItemDate: { color: COLORS.pureWhite },
  lightItemDate: { color: COLORS.calmGray },
});

export default ListItem;
