import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Main } from '@components';
import { Header } from '@commons';

const { Camera, Calls, Chats, Status } = Main;

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: '#00A884',
        tabBarInactiveTintColor: '#888D90',
        tabBarLabelStyle: {
          width: '100%',
          fontWeight: 'bold',
        },
        tabBarStyle: { backgroundColor: '#202C33' },
        tabBarIndicatorStyle: { backgroundColor: '#00A884', height: 3 },
      }}
    >
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Icon name="camera" color={color} size={20} />,
        }}
      />

      <Tab.Screen name="Chats" component={Chats} />

      <Tab.Screen name="Status" component={Status} />

      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

const MainScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="HomeTabs" children={MainTabs} />
    </Stack.Navigator>
  );
};

export default MainScreen;
