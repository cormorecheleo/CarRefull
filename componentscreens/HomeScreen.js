import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CarScreen from './Car/CarScreen';
import SettingsScreen from './Settings/SettingsScreen';
import InfoScreen from "./Info/InfoScreen";


export default function HomeScreen({route, navigation}){
    const user = route.params;
    const Tab= createBottomTabNavigator();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                )
            }}/>
            <Tab.Screen name="Car" component={CarScreen} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="car" color={color} size={26} />
                )
            }}/>
            <Tab.Screen name="Info" component={InfoScreen} options={{tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="information-variant" color={color} size={26} />
                )}}/>
            <Tab.Screen name="Account" component={SettingsScreen} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                )
            }}/>
        </Tab.Navigator>
    );
}

function Home(){
    return(
        <View>
            <Text>Home ! </Text>
        </View>
    )
}

StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    input: {
        height:48,
        borderRadius:5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom:10,
        marginLeft:30,
        paddingLeft: 16
    }
})
