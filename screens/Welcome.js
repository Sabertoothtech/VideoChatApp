import React from 'react'
import {View, Text, Image, StyleSheet, TouchableHighlight, BackHandler, ImageBackground} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    welcomeText: {
        fontSize: 35,
        textAlign: "center"
    },
    wrapper: {
        height: "80%",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    welcomeContainer: {
        paddingHorizontal: 10,
    },
    imageButton: {
        width: null, 
        resizeMode: "contain", 
        paddingHorizontal: 15, 
        paddingVertical: 10
    }
})

const handleBack = () => {
    return true
}

function Welcome({navigation}) {
    const handleStarted = () => {
        requestAnimationFrame(() => {
            navigation.navigate("Policy")
        })
    }
    useFocusEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBack)
        return () => BackHandler.removeEventListener("hardwareBackPress", handleBack)
    })
    return (
        <View style = {styles.root}>
            <View style = {styles.wrapper}>
                <View style = {styles.welcomeContainer}>
                    <Text style = {styles.welcomeText}>
                        Welcome to Quickstart Video chat...
                    </Text>
                </View>
                <View>
                    <Image source = {require("../assets/img/welcome.png")} />
                </View>
                <TouchableHighlight onPress = {handleStarted} underlayColor = "transparent">
                    <ImageBackground source = {require("../assets/img/button.png")} style = {styles.imageButton} imageStyle = {{borderRadius: 8}}>
                        <View>
                            <Text style = {{fontSize: 15, textTransform: "uppercase"}}>
                                GET STARTED
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Welcome