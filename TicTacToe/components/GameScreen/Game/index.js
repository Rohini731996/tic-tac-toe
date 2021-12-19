
import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Alert } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { DRAW, GAME_OVER, INITIAL_BOARD, O, OK, RESTART_GAME, X } from '../../../constants';
import { calculateResult } from './helper';
import Result from './Result';
import Tiles from './Tiles';


export default class Game extends Component {


    constructor(props) {
        super(props);
        this.state = {
            board: INITIAL_BOARD,
            currentPlayer: 1,
            results: ''
        }
    }


    initialiseGame = () => {

        this.setState({
            board: INITIAL_BOARD,
            currentPlayer: 1,
            results: ''
        })
    }

    _handlePress = (index) => {

        if (this.state.board[index] !== '-') return;

        let currentPlayer = this.state.currentPlayer;

        let nextplayer = (currentPlayer == 1) ? -1 : 1;

        const board = [...this.state.board];
        board[index] = currentPlayer;
        this.setState({
            board,
            currentPlayer: nextplayer
        },
            () => {
                const result = calculateResult(this.state.board);
                if (result !== null) {
                    this._calculateWinner(result);
                }
            });
    }


    _calculateWinner(result) {
        if (result == X) {
            this.announeWinner('Player X won the game!!')
            this.setState({ results: 'X' })
        } else if (result == O) {
            this.announeWinner('Player O won the game!!');
            this.setState({ results: 'O' })
        } else if (result == DRAW) {
            this.announeWinner('Match drawn !!');
            this.setState({ results: 'Tie' })
        }
    }

    announeWinner = (message) => {
        Alert.alert(
            GAME_OVER,
            message,
            [{
                text: OK,
                onPress: () =>this.initialiseGame()
            }]
        );
    }


    render() {

        return (
            <View style={styles.container}>

                <Result results={this.state.results} />

                <Tiles board={this.state.board} onHandlePress={this._handlePress} />

                <Pressable style={styles.button} onPress={() => this.initialiseGame()}>
                    <Text style={{ fontSize: 20 }}>
                        {RESTART_GAME}
                    </Text>
                    <Icon name='refresh'/>
                </Pressable>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        alignItems: "center",
        justifyContent: "center",

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:"space-between",
        flexDirection:'row',
        width: 200,
        height: 50,
        backgroundColor: "#CCCCCC",
        borderRadius: 6,
        marginTop: 30

    }
})

