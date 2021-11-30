import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from './componentscreens/LoginScreen';
import RegisterScreen from './componentscreens/RegisterScreen';
import HomeScreen from "./componentscreens/HomeScreen";
import AddVehiculeScreen from "./componentscreens/AddCarScreen";

const Stack = createNativeStackNavigator();

export default function App() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <React.Fragment>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Register" component={RegisterScreen}/>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
                    <Stack.Screen name="Ajouter véhicule" component={AddVehiculeScreen}/>
                </React.Fragment>
            </Stack.Navigator>
        </NavigationContainer>
    );
}