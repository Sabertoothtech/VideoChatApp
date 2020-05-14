import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, useWindowDimensions, Image, TouchableWithoutFeedback, ImageBackground} from 'react-native'

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 37.5,
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    connectBar: {
        height: 20,
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 16,
        position: "relative"
    },
    bar: {
        height: 1,
        width: "100%",
        backgroundColor: "#727272"
    },
    overlayText: {
        position: "absolute",
        paddingHorizontal: 11,
        paddingVertical: 2,
        backgroundColor: "#fff",
        alignSelf: "center",
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        width: "48%",
        padding: 8,
        borderWidth: 1.3,
        borderRadius: 10,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "gray",
        paddingBottom: 10,
    },
    loginButton: {
        width: null,
        resizeMode: "contain",
        paddingHorizontal: 41,
        paddingVertical: 10,
        alignItems: "center",
        width: 128,
        alignSelf: "center",
        marginTop: 20
    },
    leftSpace: {
        marginLeft: 10
    },
    fbColor: {
        color: "#1861A0"
    },
    googleColor: {
        color: "#D35649"
    }
})

const EMAIL_REGEX = /\S+@\S+\.\S+/

const FB_COLOR = "#1861A0"
const GOOGLE_COLOR = "#D35649"

function Login({navigation}) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const {height} = useWindowDimensions()

    const handleLogin = () => {
        if (EMAIL_REGEX.test(name)) {
            navigation.navigate("Video")
        }
        else {
            setError(true)
            setTimeout(() => setError(false), 1500)
        }
    }
    return (
        <View style = {styles.root}>
            <View style = {{height: 0.65*height}}>
                <Image source = {require("../assets/img/logo.png")} style = {{alignSelf: "center", marginBottom: 65}} />
                <View>
                    <TextInput 
                        style = {styles.input}
                        placeholder = "Your Name"
                        keyboardType = "name-phone-pad"
                        value = {name}
                        onChangeText = {text => setName(text)}
                        inlineImageLeft = "user"
                        inlineImagePadding = {30}
                    />
                    {error? 
                    <Text style = {{color: "red", fontSize: 10}}>
                        Invalid email
                    </Text>: null}
                    <TextInput
                        style = {styles.input}
                        placeholder = "Password"
                        secureTextEntry = {true}
                        value = {password}
                        onChangeText = {text => setPassword(text)}
                        inlineImageLeft = "password"
                        inlineImagePadding = {30}
                    />
                </View>
                <TouchableWithoutFeedback onPress = {handleLogin}>
                    <ImageBackground source = {require("../assets/img/button.png")} style = {styles.loginButton} imageStyle = {{borderRadius: 8}}>
                        <View>
                            <Text style = {{fontWeight: "bold"}}>LOGIN</Text>
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
                <View style = {styles.connectBar}>
                    <View style = {styles.bar} />
                    <View style = {styles.overlayText}>
                        <Text style = {{color: "#727272", fontSize: 15}}>
                            or connect with
                        </Text>
                    </View>
                </View>
                <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                    <TouchableWithoutFeedback>
                        <View style = {{...styles.button, borderColor: FB_COLOR}}>
                            <Image source = {require("../assets/img/facebook.png")} />
                            <Text style = {{...styles.leftSpace, color: FB_COLOR}}>Facebook</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style = {{...styles.button, borderColor: GOOGLE_COLOR}}>
                            <Image source = {require("../assets/img/google.png")} />
                            <Text style = {{...styles.leftSpace, color: GOOGLE_COLOR}}>Google</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )
}

export default Login