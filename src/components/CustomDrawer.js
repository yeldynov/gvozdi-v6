import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Share,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { COLORS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import i18n from '../lang/i18n';

const CustomDrawer = (props) => {
  const { logout, userInfo } = useAuth();
  const { isDarkTheme } = useTheme();

  const containerColor = isDarkTheme ? COLORS.calmDark : COLORS.pureWhite;
  const textColor = isDarkTheme ? COLORS.pureWhite : COLORS.calmDark;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Hey there! I've been using StepSure and it's been an incredible journey. This app has helped me stay on track with my goals and maintain a mindful lifestyle. I highly recommend giving it a try! Download StepSure now and start your own path towards a healthier and more balanced life. #StepSureApp #MindfulLiving",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: COLORS.brand }}
      >
        <ImageBackground
          // source={require('../../assets/')}
          style={{ padding: 20 }}
        >
          <Image
            source={require('../../assets/logo_main.png')}
            style={styles.image}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'nunito-bold',
            }}
          >
            {userInfo.email}
          </Text>
        </ImageBackground>
        <View
          style={{ flex: 1, paddingTop: 10, backgroundColor: containerColor }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={onShare} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='share-social-outline' size={22} color={textColor} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'nunito-regular',
                marginLeft: 5,
                color: textColor,
              }}
            >
              {i18n.t('tellAFriendText')}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='exit-outline' size={22} color={textColor} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'nunito-regular',
                marginLeft: 5,
                color: textColor,
              }}
            >
              {i18n.t('signOutText')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  lightContainer: { backgroundColor: COLORS.pureWhite },
  darkContainer: { backgroundColor: COLORS.calmDark },
});

export default CustomDrawer;
