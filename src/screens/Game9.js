import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GameButton from "../components/GameButton";

const emoji = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/google.png" }
const emoji2 = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/microsoft.png" }
const message = "You thought it was America, didn't you? Well, you were right! But remember, this isn't permanent. \n \n While you're there, you notice some ads in the newspaper. One is for Google, and another for Microsoft. They're both hiring, but you only have time to take one interview. Which one do you pick?"
const errorMessage1 = "You went into the interview excited, but you didn't stay that way for long. You failed to recognize that Google only hires the sweatiest of nerds who hacked the NSA at age 14."

const GameScreen = function ({ navigation }) {
    return <View style={styles.background}>
        <Image source={emoji} style={styles.emoji}/>
        <Image source={emoji2} style={styles.emoji2}/>
        <Text style={styles.narrator}>{message}</Text>
        <View style={{height: "3%"}}></View>
        <GameButton title="Google" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage1 })}}/>
        <GameButton title="Microsoft" onTouch={() => {navigation.navigate("Game10")}}/>
    </View>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#246EE9',
    },
    emoji: {
        width: '40%',
        height: '15%',
        alignSelf: 'center',
        top: 175,
        right: 200,
        zIndex: 1,
        position: 'absolute'
    },
    emoji2: {
        width: '40%',
        height: '15%',
        alignSelf: 'center',
        top: 175,
        left: 200,
        zIndex: 1,
        position: 'absolute'
    },
    narrator: {
        fontFamily: "Trebuchet MS",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 350,
        margin: 20
    }
});

export default GameScreen;