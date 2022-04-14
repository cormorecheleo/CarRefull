import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from './componentscreens/Auth/LoginScreen';
import RegisterScreen from './componentscreens/Auth/RegisterScreen';
import HomeScreen from "./componentscreens/HomeScreen";
import AddVehiculeScreen from "./componentscreens/Car/AddCarScreen";
import CarDetails from "./componentscreens/Car/CarDetails";
import PrevRoutiereScreen from "./componentscreens/Info/PrevRoutiereScreen";
import Welcome from "./componentscreens/Welcome/WelcomeScreen";
import CarEvent from "./componentscreens/Car/CarEvent";
import CarFuelList from "./componentscreens/Car/CarFuelList";

const Stack = createNativeStackNavigator();

export default function App() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <React.Fragment>
                    { /* Welcome Screen */ }
                    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>

                    {/* Authentication Screens */}
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Register" component={RegisterScreen}/>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>

                    {/* Car Screens */}
                    <Stack.Screen name="Ajouter véhicule" component={AddVehiculeScreen}/>
                    <Stack.Screen name="Details" component={CarDetails}/>
                    <Stack.Screen name="AddEvent" component={CarEvent} options={{ headerShown: false }}/>
                    <Stack.Screen name="Liste des stations essence" component={CarFuelList}/>

                    {/* Info Screens */}
                    <Stack.Screen name="Prévention routière"    component={PrevRoutiereScreen}/>
                </React.Fragment>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
