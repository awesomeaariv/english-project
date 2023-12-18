import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const emoji = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/winner.png" }
const message = "Congratulations! You passed the interview and are now an employee of Microsoft! Your parents sent you some money to get settled in the US, and you lived happily ever after!"

const GameScreen = function () {
    return <View style={styles.background}>
        <Image source={emoji} style={styles.emoji}/>
        <Text style={styles.narrator}>{message}</Text>
    </View>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#246EE9',
        justifyContent: "center"
    },
    emoji: {
        width: '80%',
        height: '35%',
        alignSelf: 'center',
        top: 70,
        zIndex: 1
    },
    narrator: {
        fontFamily: "Trebuchet MS",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 30,
        margin: 20
    }
});

export default GameScreen;