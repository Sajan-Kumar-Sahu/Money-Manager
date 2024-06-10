import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import Statistics from './Components/Statistics';
import Transaction from './Components/Transaction';
import Settings from './Components/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const tabConfig = [
    {
      name: 'Home',
      component: HomeScreen,
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
      iconComponent: Ionicons,
    },
    {
      name: 'Transactions',
      component: Transaction,
      focusedIcon: 'list',
      unfocusedIcon: 'list-outline',
      iconComponent: Ionicons,
    },
    {
      name: 'Statistics',
      component: Statistics,
      focusedIcon: 'bar-chart',
      unfocusedIcon: 'bar-chart-outline',
      iconComponent: Ionicons,
    },
    {
      name: 'Settings',
      component: Settings,
      focusedIcon: 'settings',
      unfocusedIcon: 'settings-outline',
      iconComponent: Ionicons,
    },
  ];

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      const routeConfig = tabConfig.find(config => config.name === route.name);
      const iconName = focused
        ? routeConfig.focusedIcon
        : routeConfig.unfocusedIcon;
      const IconComponent = routeConfig.iconComponent;

      return <IconComponent name={iconName} size={size} color={'#18FBB6'} />;
    },
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'black',
    tabBarShowLabel:false,
    tabBarStyle: {
      height: 60,
      paddingTop: 2,
      backgroundColor: '#071611',
      position: 'absolute',
      borderTopWidth: 1,
      borderColor:'#18FBB6',
      borderRadius:25
    },
    
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabConfig.map(routeConfig => (
        <Tab.Screen
          key={routeConfig.name}
          name={routeConfig.name}
          component={routeConfig.component}
          options={{headerShown:false}}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
