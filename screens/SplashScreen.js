import React, {useEffect, useRef} from 'react'
import {ImageBackground, Platform, Animated, Easing, View, Image, StyleSheet} from 'react-native'
import requestCameraAndAudioPermission from '../components/permission';

const {Value, Image: AnimatedImage, timing, loop} = Animated

const styles = StyleSheet.create({
    image: {
        position: "absolute",
    },
    root: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center"
    }
})

function SplashScreen({navigation}) {
    const progress = useRef(new Value(0)).current
    const rotate = progress.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
    })
    useEffect(() => {
        const animation = loop(timing(progress, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: "true",
            easing: Easing.linear
        }))
        animation.start()
        if (Platform.OS === 'android') {                    //Request required permissions from Android
            requestCameraAndAudioPermission().then(_ => {
                console.log("requested!")
                setTimeout(() => {
                    console.log("Hello this is navigation", navigation.navigate)
                    navigation.navigate("Welcome")
                }, 1000)
            });
        }
        return () => {
            animation.stop()
        }
    }, [])
    return (
        <View style = {{flex: 1}}>
            <ImageBackground source = {require("../assets/img/splash.png")} style = {styles.root} imageStyle = {{resizeMode: "cover"}}>
                <>
                    <View style = {styles.image}>
                        <Image source = {require("../assets/img/whitelogo.png")} />
                    </View>
                    <AnimatedImage source = {require("../assets/img/circle.png")} style = {{...styles.image, transform: [{rotate: rotate}]}} />
                </>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen