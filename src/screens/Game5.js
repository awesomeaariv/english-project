import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GameButton from "../components/GameButton";

const emoji = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/9-11.png" }
const message = "You graduated from college with an MBA, some CS skills, and a heart full of hope. Right as you enter the job market, however, 9/11 happens and jobs disappear! Do you want to hunt for jobs or go home to your parents?"
const errorMessage1 = "Your parents were disappointed in you but still let you stay. You ended up taking over your father's tea stall."

const GameScreen = function ({ navigation }) {
    return <View style={styles.background}>
        <Image source={emoji} style={styles.emoji}/>
        <Text style={styles.narrator}>{message}</Text>
        <View style={{height: "3%"}}></View>
        <GameButton title="Hunt for Jobs" onTouch={() => {navigation.navigate("Game6")}}/>
        <GameButton title="Go to Parents" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage1 })}}/>
    </View>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#246EE9',
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