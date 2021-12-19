import React from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import GameScreen from '../components/GameScreen';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator()


const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='WelcomeScreen'
      screenOptions={{
        title: 'Tic Tac Toe'
      }}>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <Stack.Screen name='GameScreen' options={{ title: "Play", headerBackTitle: 'Back' }} component={GameScreen} />

    </Stack.Navigator>
  )

}


export default AppNavigator;
