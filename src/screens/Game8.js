import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GameButton from "../components/GameButton";

const emoji = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/foreign_country.png" }
const message = "You're loving this job! Stable pay, comfortable living conditions, and you're learning a lot too! However, your boss offers you an assignment that would require you to live in a foreign country for a few months. Do you accept?"
const errorMessage1 = "Your boss accepts that, but now he thinks you're not interested in foreign assignments. You end up leading a successful career right here in India."

const GameScreen = function ({ navigation }) {
    return <View style={styles.background}>
        <Image source={emoji} style={styles.emoji}/>
        <Text style={styles.narrator}>{message}</Text>
        <View style={{height: "3%"}}></View>
        <GameButton title="Yes" onTouch={() => {navigation.navigate("Game9")}}/>
        <GameButton title="No" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage1 })}}/>
    </View>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#246EE9',
    },
    emoji: {
        width: '70%',
        height: '30%',
        alignSelf: 'center',
        top: 70,
        zIndex: 1
    },
    narrator: {
        fontFamily: "Trebuchet MS",
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 60,
        margin: 20
    }
});

export default GameScreen;