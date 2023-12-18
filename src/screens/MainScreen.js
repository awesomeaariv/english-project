import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

BOTTOM_TEXT = "(click the flag to start)";
const logo = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/Will-you-make-it-to-America.png" };
const flag = { uri: "https://aariv-react-native.s3.amazonaws.com/engrish-project/us-flag.png" };

const MainScreen = function ({ navigation }) {
    return <View style={styles.background}>
        <Image source={logo} style={styles.logo}/>
        <Image source={flag} style={styles.flag}/>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Game1")}}/>
        <Text style={styles.bottomText}>{BOTTOM_TEXT}</Text>
    </View>
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#246EE9',
    },
    title: {
        fontFamily: "Trebuchet MS",
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
        alignSelf: "center",
        paddingTop: 50
    },
    logo: {
        width: '80%',
        height: '20%',
        alignSelf: 'center',
        top: 100
    },
    flag: {
        width: '80%',
        height: '25%',
        alignSelf: 'center',
        top: 300,
        zIndex: 1
    },
    bottomText: {
        fontFamily: "Trebuchet MS",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        paddingTop: 400
    },
    button : {
        height: 220,
        width: 300,
        alignSelf: "center",
        position: "absolute",
        bottom: 170,
        zIndex: 2
    }
    
});

export default MainScreen;