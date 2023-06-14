import { createDrawerNavigator } from '@react-navigation/drawer';
import GuideScreen from '../screens/GuideScreen';
import ContactScreen from '../screens/ContactScreen';
import TabNavigator from './TabNavigator';
import CustomDrawer from '../components/CustomDrawer';
import { COLORS } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';
import i18n from '../lang/i18n';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const { isDarkTheme } = useTheme();

  const containerColor = isDarkTheme ? COLORS.calmDark : COLORS.pureWhite;
  const textColor = isDarkTheme ? COLORS.pureWhite : COLORS.calmDark;

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: containerColor,
        },
        headerStyle: {
          backgroundColor: COLORS.brand,
        },
        // headerShown: false,
        // headerRight: () => (
        //   <TouchableOpacity
        //     onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        //   >
        //     <Text>Step Sure</Text>
        //   </TouchableOpacity>
        // ),
        // headerTransparent: true,

        headerTitleStyle: { display: 'none' },
        drawerActiveBackgroundColor: COLORS.brand,
        drawerActiveTintColor: COLORS.primaryDark,
        drawerInactiveTintColor: COLORS.darkContainer,
        drawerLabelStyle: {
          fontFamily: 'nunito-regular',
          fontSize: 18,
          color: textColor,
        },
      }}
    >
      <Drawer.Screen component={TabNavigator} name={i18n.t('homeLinkText')} />
      <Drawer.Screen component={GuideScreen} name={i18n.t('guideLinkText')} />
      <Drawer.Screen
        component={ContactScreen}
        name={i18n.t('contactLinkText')}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
