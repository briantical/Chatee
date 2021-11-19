import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { Screens } from './src';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Screens />;
};

export default App;
