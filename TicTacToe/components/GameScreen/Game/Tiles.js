import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Icon } from 'react-native-elements'

const Tiles = (props) => {

    const renderIcon = (index) => {
        var value = props.board[index];

        switch (value) {
            case 1:
                return <Icon
                    name='close'
                    type='font-awesome'
                    color='red'
                    iconStyle={{ fontSize: 80 }}
                />
            case -1:
                return <Icon
                    name='circle-thin'
                    type='font-awesome'
                    color='green'
                    iconStyle={{ fontSize: 70 }}
                />

            default:
                return <View />;

        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>

                <Pressable onPress={() => props.onHandlePress(0)} style={styles.tile}>
                    {renderIcon(0)}
                </Pressable>
                <Pressable onPress={() => props.onHandlePress(1)} style={styles.tile}>
                    {renderIcon(1)}
                </Pressable>
                <Pressable onPress={() => props.onHandlePress(2)} style={styles.tile}>
                    {renderIcon(2)}
                </Pressable>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Pressable onPress={() => props.onHandlePress(3)} style={styles.tile}>
                    {renderIcon(3)}
                </Pressable>
                <Pressable onPress={() => props.onHandlePress(4)} style={styles.tile}>
                    {renderIcon(4)}
                </Pressable>
                <Pressable onPress={() => props.onHandlePress(5)} style={styles.tile}>
                    {renderIcon(5)}
                </Pressable>
            </View>
            <View style={{ flexDirection: "row" }}>

                <Pressable onPress={() => props.onHandlePress(6)} style={styles.tile}>
                    {renderIcon(6)}
                </Pressable>
                <Pressable onPress={() => props.onHandlePress(7)} style={styles.tile}>
                    {renderIcon(7)}

                </Pressable>
                <Pressable onPress={() => props.onHandlePress(8)} style={styles.tile}>
                    {renderIcon(8)}

                </Pressable>
            </View>
        </View>
    )
}

export default Tiles;

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        alignItems: "center",
        justifyContent: "center",

    },
    tile: {
        width: 100,
        height: 100,
        borderColor: '#CCCCCC',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'lightgrey',
        backgroundColor: 'black',
        elevation: 15,
        shadowOpacity: 10
    }
})
