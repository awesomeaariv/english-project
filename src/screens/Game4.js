import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GameButton from "../components/GameButton";

const emoji = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/CS.png" }
const message = "You start a degree in business because that's what all of your friends picked. After a few semesters, you hear about this interesting new field called computer science. Do you continue taking your business degree, take CS courses on the side, or drop out and work on CS full-time?"
const errorMessage1 = "You ended up majoring in business and starting up a moderately successful Roti-matic ripoff company."
const errorMessage2 = "You really thought your parents would let you drop out, just like that? They hauled you back home and put you to work at your father's tea stall."

const GameScreen = function ({ navigation }) {
    return <View style={styles.background}>
        <Image source={emoji} style={styles.emoji}/>
        <Text style={styles.narrator}>{message}</Text>
        <View style={{height: "3%"}}></View>
        <GameButton title="Continue Business" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage1 })}}/>
        <GameButton title="CS on the Side" onTouch={() => {navigation.navigate("Game5")}}/>
        <GameButton title="Drop Out" onTouch={() => {navigation.navigate("GameOver", { message: errorMessage2 })}}/>
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