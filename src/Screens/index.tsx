import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreens from './Main';
import SettingsScreens from './Settings';

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreens" children={MainScreens} />
        <Stack.Screen name="SettingsScreens" children={SettingsScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
