import React from 'react'
import { Text, View } from 'react-native'
import { PLAYER_O } from '../../../constants';

const Result = ({ results }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            {results !== '' && results !== 'Tie' &&
                <Text style={{ color: results == PLAYER_O ? 'red' : 'green', fontSize: 25 }}>
                    Player {results} won game !!
                </Text>
            }
            {results === 'Tie' &&
                <Text style={{ color: '#999999', fontSize: 25 }}>
                    Match drawn !!
                </Text>
            }
             {results === '' &&
                <Text style={{ color: '#999999', fontSize: 25 }}>
                    Tic Tac Toe
                </Text>
            }
           
        </View>
    )
}

export default Result;

