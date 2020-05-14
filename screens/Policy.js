import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 37,
        paddingVertical: 66
    },
    policy: {
        paddingHorizontal: 28,
        paddingVertical: 25,
        borderWidth: 2,
        borderColor: "#EAEAEA",
        borderRadius: 12
    },
    terms: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 30
    },
    mainText: {
        color: "#727272",
        fontSize: 10,
        lineHeight: 16
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    button: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10
    },
    leftSpace: {
        marginLeft: 15,
    },
    decline: {
        color: "#FF375B"
    },
    accept: {
        color: "#000000"
    }
})

function Policy({navigation}) {
    const [checked, setChecked] = useState(false)

    const handleAccept = () => {
        navigation.navigate("Login")
    }
    return (
        <View style = {styles.root}>
            <View style = {styles.policy}>
                <Text style = {{fontSize: 15, fontWeight: "bold"}}>
                    SAMPLE POLICY
                </Text>
                <Text style = {{color: "#727272", fontSize: 12, marginBottom: 11}}>
                    Terms of use
                </Text>
                <Text style = {styles.mainText}>
                    You can decide which country's laws apply to govern the agreement. This is otherwise known as choosing the jurisdiction. You will generally choose the country where the website, or business, is based. You can remove or delete abusive accounts. For example, say you run a social media platform and explain that people who post inflammatory, abusive, or explicit content will be blocked from the service. Someone posts abusive content. You can block their account without worry, because you can rely on your Terms and Conditions agreement. You can limit your responsibility. You can include disclaimer clauses in your agreement that say you're not liable for third party content, and you don't endorse it. You can also say that you're not responsible for mistakes and typos, or content uploaded by users which other users may find offensive. You can manage a user's expectations of your website or platform. When the terms are clear, users know what they can and cannot expect from you. You can set your own site rules and the consequences for violating these rules, within legal limits. You can't contract out of certain rules such as the law of negligence. It's vital that you protect your intellectual property rights. By setting out what your rights are in the Terms and Conditions agreement, you can take action against users who infringe your rights. It should be clear that the logo, brand, and content belong to you.
                </Text>
                <View style = {styles.terms}>
                    <CheckBox 
                        value = {checked}
                        onValueChange = {() => setChecked(prev => !prev)}
                        tintColors = {{true: "#2d3436", false: "#fff"}}
                    />
                    <Text style = {styles.leftSpace}>
                        I read the terms
                    </Text>
                </View>
                <View style = {styles.buttons}>
                    <TouchableOpacity>
                        <View style ={[styles.button, styles.leftSpace]}>
                            <Text style = {styles.decline}>Decline</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableWithoutFeedback onPress = {handleAccept}>
                        <View style = {[styles.button, styles.leftSpace]}>
                            <Text style = {styles.accept}>Accept</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )
}

export default Policy