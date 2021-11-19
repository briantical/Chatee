import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Settings } from '../Components';

const {
  Settings: Home,
  Account,
  Chats,
  Notifications,
  Storage,
  Help,
  Invite,
} = Settings;

const Stack = createStackNavigator();

const SettingsScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Home} />

      <Stack.Screen name="Account" component={Account} />

      <Stack.Screen name="Chats" component={Chats} />

      <Stack.Screen name="Notifications" component={Notifications} />

      <Stack.Screen name="Storage and data" component={Storage} />

      <Stack.Screen name="Help" component={Help} />

      <Stack.Screen name="Invite a friend" component={Invite} />
    </Stack.Navigator>
  );
};

export default SettingsScreens;
