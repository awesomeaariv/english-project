import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GameButton from "../components/GameButton";

const emoji = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/money-bag.png" }
const message = "Congratulations! You've just been born in a small town in India called Jhansi. Do you want your family to be poor, middle-class, or wealthy?"
const errorMessage1 = "You had great dreams, but your parents could barely afford to feed you, let alone send you to college. You continued working at your father's tea stall for the rest of your life."
const errorMessage2 = "You became a spoiled brat, inherited your father's business, and drove it into bankruptcy because of your poor management skills."

const GameScreen = function ({ navigation }) {
    return <View style={styles.background}>
        <Image source={emoji} style={styles.emoji}/>
        <Text style={styles.narrator}>{message}</Text>
        <View style={{height: "3%"}}></View>
        <GameButton title="Poor" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage1 })}}/>
        <GameButton title="Middle-Class" onTouch={() => {navigation.navigate("Game2")}}/>
        <GameButton title="Rich" onTouch={() => {navigation.navigate("GameOver", { 'message': errorMessage2})}}/>
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