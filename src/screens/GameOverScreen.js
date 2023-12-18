import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import GameButton from "../components/GameButton";

const gif = { uri: 'https://aariv-react-native.s3.amazonaws.com/engrish-project/mario.gif' }

const GameOverScreen = function ({ route, navigation }) {
    const { message } = route.params

    return <View style={styles.background}>
        <Text style={styles.title}>GAME OVER</Text>
        <Text style={styles.narrator}>{message}</Text>
        <View style={{height: "3%"}}></View>
        <Image
            style={styles.gif}
            source={gif}
        />
        <View style={{height: "10%"}}></View>
        <GameButton title="Try Again" onTouch={() => {navigation.navigate("Main")}}/>
    </View>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FF0000'
    },
    narrator: {
        fontFamily: "Trebuchet MS",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20
    },
    title: {
        fontFamily: "Trebuchet MS",
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 100,
        margin: 20
    },
    gif : {
        width: 300,
        height: 200,
        alignSelf: 'center'
    }
});

export default GameOverScreen;