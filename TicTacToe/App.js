import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigations/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </SafeAreaProvider>
    );

  }
}