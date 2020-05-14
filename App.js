import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SplashScreen from './screens/SplashScreen'
import Welcome from './screens/Welcome'
import Policy from './screens/Policy'
import Login from './screens/Login'
import Video from './screens/Video'

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{header: () => null}}>
                <Stack.Screen name = "SplashScreen" component = {SplashScreen} />
                <Stack.Screen name = "Welcome" component = {Welcome} />
                <Stack.Screen name = "Policy" component = {Policy} />
                <Stack.Screen name = "Login" component = {Login} />
                <Stack.Screen name = "Video" component = {Video} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App