import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, TouchableOpacity } from 'react-native';
import GuideScreen from '../screens/GuideScreen';
import ContactScreen from '../screens/ContactScreen';
import TabNavigator from './TabNavigator';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import CustomDrawer from '../components/CustomDrawer';
import { COLORS } from '../constants/theme';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        // headerShown: false,
        // headerRight: () => (
        //   <TouchableOpacity
        //     onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        //   >
        //     <Text>Step Sure</Text>
        //   </TouchableOpacity>
        // ),
        headerStyle: {
          backgroundColor: COLORS.brand,
        },
        headerTitleStyle: { display: 'none' },
        drawerActiveBackgroundColor: COLORS.calmGray,
        drawerActiveTintColor: COLORS.primaryDark,
        drawerInactiveTintColor: COLORS.darkContainer,
        drawerLabelStyle: {
          fontFamily: 'nunito-regular',
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen component={TabNavigator} name='Home' />
      <Drawer.Screen component={GuideScreen} name='Guide' />
      <Drawer.Screen component={ContactScreen} name='Contact' />
    </Drawer.Navigator>
  );
};

export default AppStack;
