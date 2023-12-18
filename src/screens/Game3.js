import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GameButton from "../components/GameButton";

const emoji = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/college.png" }
const message = "Your childhood went by faster than Lightning McQueen on steroids, and now it's time to apply to colleges! Based on your grades, do you want to apply to top colleges, average colleges, or poor colleges?"
const errorMessage1 = "You were accepted into IIT, a college with notoriously low acceptance rates! You ended up becoming a doctor, which pleased your parents but didn't get you to America, where they already have doctors."
const errorMessage2 = "Your degree was useless and the only job you found was in a call center in Mumbai, where the only compensation is scamming the elderly out of their pensions."

const GameScreen = function ({ navigation }) {
    return <View style={styles.background}>
        <Image source={emoji} style={styles.emoji}/>
        <Text style={styles.narrator}>{message}</Text>
        <View style={{height: "3%"}}></View>
        <GameButton title="Top Colleges" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage1 })}}/>
        <GameButton title="Average Colleges" onTouch={() => {navigation.navigate("Game4")}}/>
        <GameButton title="Poor Colleges" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage2 })}}/>
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