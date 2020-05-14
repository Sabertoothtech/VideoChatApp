// import React, {useEffect, useState, useMemo} from 'react'
// import {View, Text, TouchableOpacity, NativeModules, Image, StyleSheet, useWindowDimensions, ImageBackground, TouchableWithoutFeedback} from 'react-native'
// import { RtcEngine, AgoraView } from 'react-native-agora'

// const { Agora } = NativeModules
// const {
//     FPS30,
//     AudioProfileDefault,
//     AudioScenarioDefault,
//     Adaptative,
//   } = Agora;

// const config = {                            //Setting config of the app
//     appid: '470adcc80ea84f01a0b1d26e481df797',               //Enter the App ID generated from the Agora Website
//     channelProfile: 0,                        //Set channel profile as 0 for RTC
//     videoEncoderConfig: {                     //Set Video feed encoder settings
//         width: 720,
//         height: 1080,
//         bitrate: 1,
//         frameRate: FPS30,
//         orientationMode: Adaptative,
//     },
//     audioProfile: AudioProfileDefault,
//     audioScenario: AudioScenarioDefault,
// }

// const styles = StyleSheet.create({
//     full: {
//         flex: 1
//     },
//     overlayImage: {
//         position: "absolute",
//         resizeMode: "cover",
//         paddingHorizontal: 20,
//         bottom: 0,
//         height: 144
//     },
//     buttonText: {
//         textTransform: "uppercase",
//         fontSize: 15,
//         color: "#fff"
//     },
//     oneRemote: {
//         position: "absolute",
//         height: 222,
//         width: 151,
//         right: 0,
//     },
//     middleButton: {
//         position: "relative", 
//         width: 72, 
//         height: 72, 
//         top: -5, 
//         justifyContent: "center", 
//         alignItems: "center"
//     },
//     muteContainer: {
//         flex: 1, 
//         flexDirection: "row", 
//         justifyContent: "space-between", 
//         paddingHorizontal: 40, 
//         position: "relative", 
//         top: -20
//     }
// })

// function Video() {
//     const [peerIds, setPeerIds] = useState([])
//     const [uid, setUid] = useState(Math.floor(Math.random()*100))
//     const [appId, setAppID] = useState(config.appid)
//     const [channel, setChannel] = useState("channel-x")
//     const [isJoined, setJoined] = useState(false)
//     const {width, height} = useWindowDimensions()

//     useEffect(() => {
//         RtcEngine.on("userJoined", data => {
//             console.log("hello1", data)
//             if (peerIds.indexOf(data.uid) === -1) {
//                 setPeerIds([...peerIds, data.uid])
//             }
//         })
//         RtcEngine.on("userOffline", data => {
//             console.log("hello2", data)
//             setPeerIds(peerIds.filter(p => p !== data.uid))
//         })
//         RtcEngine.on("joinChannelSuccess", data => {
//             console.log("I am here", uid)
//             RtcEngine.startPreview()
//             setJoined(true)
//         })
//         RtcEngine.init(config)
//     }, [])

//     const startCall = () => {
//         RtcEngine.joinChannel(channel, uid)
//         console.log("Hello", peerIds, uid, isJoined)
//         RtcEngine.enableAudio()
//     }

//     const endCall = () => {
//         console.log("End call")
//         RtcEngine.leaveChannel()
//         setPeerIds([])
//         setJoined(false)
//     }

//     const videoContent = () => {
//         switch (peerIds.length) {
//             case 0:
//                 return (
//                     <View style = {{height: height-90, backgroundColor: "green", justifyContent: "center", alignContent: "center"}}>
//                         <Text style = {{fontSize: 30, textAlign: "center"}}>Press start to connect to channel-x</Text>
//                     </View>
//                 )
//             case 1:
//                 return (
//                     <View style = {{height: height-90}}>
//                         <AgoraView style = {{width: width, height: height, zIndex: 3}} remoteUid = {peerIds[0]} mode = {1} />
//                         <AgoraView zOrderMediaOverlay={true} showLocalVideo={true} mode = {1} />
//                     </View>
//                 )
//             case 2:
//                 return (
//                     <View style = {{width: width, height: height}}>
//                         <AgoraView style = {styles.oneRemote} remoteUid = {peerIds[1]} />
//                         <AgoraView style = {{width: width, height: height}} showLocalVideo = {true} mode = {1} />
//                     </View>
//                 )
//         }
//     }

//     return (
//         <View style = {{flex: 1, backgroundColor: "yellow"}}>
//             {videoContent()}
//             <ImageBackground source = {require("../assets/img/overlay.png")} style = {{...styles.overlayImage, width: width}}>
//                 <>
//                     <View style = {{flex: 1, alignItems: "center"}}>
//                         <ImageBackground source = {require("../assets/img/start.png")} style = {styles.middleButton} imageStyle = {{resizeMode: "stretch"}}>
//                             <TouchableWithoutFeedback onPress = {startCall}>
//                                 <View>
//                                     <Text style = {{color: "#fff", textTransform: "uppercase"}}>Start</Text>
//                                 </View>
//                             </TouchableWithoutFeedback>
//                         </ImageBackground>
//                     </View>
//                     <View style = {styles.muteContainer}>
//                         <Image source = {require("../assets/img/mute.png")} />
//                         <Image source = {require("../assets/img/mutevideo.png")} />
//                         <TouchableWithoutFeedback onPress = {endCall}>
//                             <ImageBackground source = {require("../assets/img/end.png")} style = {styles.middleButton} imageStyle = {{resizeMode: "stretch"}}>
//                                 <View>
//                                     <Text style = {{color: "#fff", textTransform: "uppercase"}}>End</Text>
//                                 </View>
//                             </ImageBackground>
//                         </TouchableWithoutFeedback>
//                     </View>
//                 </>
//             </ImageBackground>
//         </View>
//     )
// }

// export default Video

/* eslint-disable prettier/prettier */
import requestCameraAndAudioPermission from '../components/permission';
import React, { Component } from 'react';
import { View, NativeModules, Text, TouchableOpacity, Platform, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';
import { RtcEngine, AgoraView } from 'react-native-agora';
import styles from '../components/Style';

const { Agora } = NativeModules;            //Define Agora object as a native module

const {
  FPS30,
  AudioProfileDefault,
  AudioScenarioDefault,
  Adaptative,
} = Agora;                                  //Set defaults for Stream

const config = {                            //Setting config of the app
  appid: '470adcc80ea84f01a0b1d26e481df797',               //Enter the App ID generated from the Agora Website
  channelProfile: 0,                        //Set channel profile as 0 for RTC
  videoEncoderConfig: {                     //Set Video feed encoder settings
    width: 720,
    height: 1080,
    bitrate: 1,
    frameRate: FPS30,
    orientationMode: Adaptative,
  },
  audioProfile: AudioProfileDefault,
  audioScenario: AudioScenarioDefault,
};

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peerIds: [],                                       //Array for storing connected peers
      uid: Math.floor(Math.random() * 100),              //Generate a UID for local user
      appid: config.appid,
      channelName: 'channel-x',                        //Channel Name for the current session
      joinSucceed: false,                                //State variable for storing success
    };
    if (Platform.OS === 'android') {                    //Request required permissions from Android
      requestCameraAndAudioPermission().then(_ => {
        console.log('requested!');
      });
    }
  }
  componentDidMount() {
    console.log(this.state.peerIds)
    RtcEngine.on('userJoined', (data) => {
      const { peerIds } = this.state;                   //Get currrent peer IDs
      if (peerIds.indexOf(data.uid) === -1) {           //If new user has joined
        this.setState({
          peerIds: [...peerIds, data.uid],              //add peer ID to state array
        });
      }
    });
    RtcEngine.on('userOffline', (data) => {             //If user leaves
      this.setState({
        peerIds: this.state.peerIds.filter(uid => uid !== data.uid), //remove peer ID from state array
      });
    });
    RtcEngine.on('joinChannelSuccess', (data) => {                   //If Local user joins RTC channel
      RtcEngine.startPreview();
      console.log("I was called")                                      //Start RTC preview
      this.setState({
        joinSucceed: true,                                           //Set state variable to true
      });
    });
    RtcEngine.init(config);                                         //Initialize the RTC engine
  }

  componentWillUnmount() {
    this.endCall();
  }
  /**
  * @name startCall
  * @description Function to start the call
  */
  startCall = () => {
    RtcEngine.joinChannel(this.state.channelName, this.state.uid);  //Join Channel
    RtcEngine.enableAudio();                                        //Enable the audio
  }
  /**
  * @name endCall
  * @description Function to end the call
  */
  endCall = () => {
    RtcEngine.leaveChannel();
    this.setState({
      peerIds: [],
      joinSucceed: false,
    });
  }
  /**
  * @name videoView
  * @description Function to return the view for the app
  */
  videoView() {
    return (
      <View style={styles.max}>
        {
          <View style={styles.max}>
            <Image source = {require("../assets/img/changecam.png")} style = {{position: "absolute", left: 20, top: 20}} />
            <Image source = {require("../assets/img/shareimage.png")} style = {{position: "absolute", left: 20, top: 66}} />
            <ImageBackground source = {require("../assets/img/overlay.png")} style = {{...styles.overlayImage}}>
                <>
                    <View style = {{flex: 1, alignItems: "center"}}>
                        <ImageBackground source = {this.state.joinSucceed? require("../assets/img/end.png"): require("../assets/img/start.png")} style = {styles.middleButton} imageStyle = {{resizeMode: "stretch"}}>
                            <TouchableWithoutFeedback onPress = {this.state.joinSucceed? this.endCall: this.startCall}>
                                <View>
                                    <Text style = {{color: "#fff", textTransform: "uppercase"}}>{this.state.joinSucceed? "End": "Start"}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </ImageBackground>
                    </View>
                    <View style = {styles.muteContainer}>
                        <Image source = {require("../assets/img/mute.png")} />
                        <Image source = {require("../assets/img/mutevideo.png")} />
                        {/* <TouchableWithoutFeedback onPress = {this.endCall}>
                            <ImageBackground source = {require("../assets/img/end.png")} style = {styles.middleButton} imageStyle = {{resizeMode: "stretch"}}>
                                <View>
                                    <Text style = {{color: "#fff", textTransform: "uppercase"}}>End</Text>
                                </View>
                            </ImageBackground>
                        </TouchableWithoutFeedback> */}
                    </View>
                </>
            </ImageBackground>
            {
              !this.state.joinSucceed ?
                <View />
                :
                <View style={styles.fullView}>
                  {
                    this.state.peerIds.length > 3                   //view for four videostreams
                      ? <View style={styles.full}>
                            <View style = {{flexDirection: "row"}}>
                                <AgoraView style={styles.remotePeer}
                                remoteUid={this.state.peerIds[2]} mode={1} />
                                <AgoraView style={styles.remotePeer}
                                remoteUid={this.state.peerIds[1]} mode={1} />
                            </View>
                            <View style = {{flexDirection: "row"}}>
                                <AgoraView style={styles.remotePeer}
                                remoteUid={this.state.peerIds[3]} mode={1} />
                            <AgoraView style={styles.remotePeer}
                                remoteUid={this.state.peerIds[0]} mode={1} />
                            </View>
                      </View>
                      : this.state.peerIds.length > 2                   //view for three videostreams
                        ?<View style={styles.full}>
                            <View style = {{flexDirection: "row", flex: 1}}>
                                <AgoraView style={styles.remotePeer}
                                remoteUid={this.state.peerIds[1]} mode={1} />
                                <AgoraView style={styles.remotePeer}
                                remoteUid={this.state.peerIds[2]} mode={1} />
                            </View>
                            <View style = {{flex: 1, flexDirection: "row"}}>
                                <AgoraView remoteUid = {this.state.peerIds[0]} style = {styles.remotePeer} mode = {1} />
                                <AgoraView style={styles.remotePeer} showLocalVideo={true} mode={1} /> 
                            </View>
                        </View>
                        : this.state.peerIds.length > 1                   //view for two videostreams
                          ? 
                          <View style = {styles.full}>
                            <View style={{flexDirection: "row", flexBasis: "40%"}}>
                              <AgoraView style={styles.remotePeer}
                                remoteUid={this.state.peerIds[1]} mode={1} />
                              <AgoraView style= {styles.remotePeer}
                                remoteUid={this.state.peerIds[0]} mode={1} />
                            </View>
                            <AgoraView style={styles.localWithTwoRemotePeer} zOrderMediaOverlay = {true} showLocalVideo={true} mode={1} />
                          </View>
                          : this.state.peerIds.length > 0                   //view for videostream
                            ?
                            <View style = {{flex: 1}}>
                              <AgoraView style={styles.localVideoStyle} showLocalVideo={true} mode={1} />
                              <AgoraView style={styles.oneRemotePeer}
                              remoteUid={this.state.peerIds[0]} mode={1} />
                            </View> 
                            : <View style = {{flex: 1}}>
                              <AgoraView style={styles.localVideoStyle} showLocalVideo={true} mode={1} />
                            </View>
                  }
                </View>
            }
          </View>
        }
      </View>
    );
  }
  render() {
    return this.videoView();
  }
}
export default Video;