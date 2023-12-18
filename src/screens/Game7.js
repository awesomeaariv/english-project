import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GameButton from "../components/GameButton";

const emoji = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/good_job.png" }
const message = "After months of working at this job, fortune favored you with a much better job offer! Better pay and better hours! Do you take it or continue your current job?"
const errorMessage1 = "Why? WHY? You had a great job lined up? All you had to do was accept it!"

const GameScreen = function ({ navigation }) {
    return <View style={styles.background}>
        <Image source={emoji} style={styles.emoji}/>
        <Text style={styles.narrator}>{message}</Text>
        <View style={{height: "3%"}}></View>
        <GameButton title="Take New Job" onTouch={() => {navigation.navigate("Game8")}}/>
        <GameButton title="Keep Current Job" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage1 })}}/>
    </View>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#246EE9',
    },
    emoji: {
        width: '60%',
        height: '30%',
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
        paddingTop: 60,
        margin: 20
    }
});

export default GameScreen;