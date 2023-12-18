import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Rectangle from "./Rectangle";

const GameButton = function ({ title, onTouch }) {
    return <View style={styles.view}>
        <Rectangle/>
        <Text style={styles.buttonText}>{`${title}`}</Text>
        <TouchableOpacity style={styles.button} onPress={onTouch}/>
    </View>
};

//<Text style={styles.blankText}></Text>

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 350,
        alignSelf: "center",
        position: "absolute",
        bottom: 47,
        zIndex: 3,
    },
    buttonText: {
        fontFamily: "Trebuchet MS",
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
        bottom: 65,
        zIndex: 2
    },
    view: {
        height: "11%"
    }
});

export default GameButton;