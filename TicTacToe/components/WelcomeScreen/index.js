import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TAP_MESSAGE, WELCOME_MESSAGE } from '../../constants';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{WELCOME_MESSAGE}</Text>

      <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate('GameScreen')}>
        <Image source={require('../../assets/tic-tac-toe-60.png')} style={styles.icon} />
        <Text style={styles.instructions}>{TAP_MESSAGE}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 25,
    marginBottom: 54,
    textAlign: 'center',
    color: '#999999',
    fontFamily: "monospace",
  },
  instructions: {
    textAlign: 'center',
    color: '#999999',
    fontSize: 25,
    fontFamily: "serif",
    textDecorationLine: 'underline'
  },
  icon: {
    height: 50,
    width: 50
  }
});