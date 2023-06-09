import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CreateScreen from '../screens/CreateScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import { COLORS } from '../constants/theme';
import { FontAwesome, Foundation, Ionicons } from '@expo/vector-icons';
import AccountScreen from '../screens/AccountScreen';
import SessionDetailScreen from '../screens/SessionDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HistoryScreen}
        name='History'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SessionDetailScreen}
        name='SessionDetails'
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: COLORS.brand },
        tabBarInactiveTintColor: COLORS.pureWhite,
        tabBarActiveTintColor: COLORS.playfullYellow,
      }}
    >
      <Tab.Screen
        name='HistoryStack'
        component={HistoryStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='th-list' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Create'
        component={CreateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name='foot' size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Statistics'
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='stats-chart' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
