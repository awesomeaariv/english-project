import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GameButton from "../components/GameButton";

const emoji = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/books.png" }
const message = "Like every other kid, you attend school, where grades are super important. Do you want to work hard for good grades, settle for average grades, or slack off and get bad grades?"
const errorMessage1 = "The ultra-competitive nature of India resulted in you burning out at age 17 and taking over your father's tea stall."
const errorMessage2 = "In the ultra-competitive nature of India, you could not keep up. You were not accepted to any colleges and took over your father's tea stall."

const GameScreen = function ({ navigation }) {
    return <View style={styles.background}>
        <Image source={emoji} style={styles.emoji}/>
        <Text style={styles.narrator}>{message}</Text>
        <View style={{height: "3%"}}></View>
        <GameButton title="Good Grades" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage1 })}}/>
        <GameButton title="Average Grades" onTouch={() => {navigation.navigate("Game3")}}/>
        <GameButton title="Bad Grades" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage2 })}}/>
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