import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Game from './Game';


const GameScreen = () => {

    return (
        <View style={styles.container}>
            <Game />
        </View>
    );

}

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
});