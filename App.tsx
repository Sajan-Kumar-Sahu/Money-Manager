import {SafeAreaView} from 'react-native';
import React from 'react';
import MainNavigator from './Source/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigator></MainNavigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
