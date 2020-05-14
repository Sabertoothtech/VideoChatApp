/* eslint-disable prettier/prettier */

import { StyleSheet, Dimensions } from 'react-native';

let dimensions = {                                //get dimensions of the device to use in view styles
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  };

export default StyleSheet.create({
    max: {
        flex: 1,
    },
    buttonHolder: {
        height: 100,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#0093E9',
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
    },
    fullView: {
        width: dimensions.width,
        height: 0.95*dimensions.height,
    },
    halfViewRow: {
        flex: 1 / 2,
        flexDirection: 'row',
    },
    full: {
        flex: 1,
    },
    half: {
        flex: 1 / 2,
    },
    localVideoStyle: {
        flex: 1,
        zIndex: -1,
        // position: 'absolute',
        // top: 5,
        // right: 5,
        // zIndex: 100,
    },
    noUserText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#0093E9',
    },
    middleButton: {
        position: "relative", 
        width: 72, 
        height: 72, 
        top: -5, 
        justifyContent: "center", 
        alignItems: "center"
    },
    muteContainer: {
        flex: 1, 
        flexDirection: "row", 
        justifyContent: "space-between", 
        paddingHorizontal: 40, 
        position: "relative", 
        top: -20
    },
    overlayImage: {
        position: "absolute",
        resizeMode: "cover",
        paddingHorizontal: 20,
        bottom: 0,
        height: 144,
        width: dimensions.width,
        zIndex: 3
    },
    oneRemotePeer: {
        position: "absolute",
        width: 0.4*dimensions.width,
        height: 0.41*dimensions.height,
        top: 0,
        right: 0,
        zIndex: 4,
        resizeMode: "cover"
    },
    remotePeer: {
        flex: 1,
        width: "50%",
        height: "100%"
    },
    localWithTwoRemotePeer: {
        flexBasis: "60%",
        width: "100%",
        height: "100%",
        bottom: 0
    }
});
