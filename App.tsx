import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {Screens} from './src';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <Text>{Screens}</Text>
    </SafeAreaView>
  );
};

export default App;
