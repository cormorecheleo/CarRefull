import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HomeScreen({route}){
    const user = route.params
    const Tab= createBottomTabNavigator()
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                )
            }}/>
            <Tab.Screen name="Car" component={Car} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="car" color={color} size={26} />
                )
            }}/>
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                )
            }}/>
        </Tab.Navigator>
    );
}

function Home(){
    return(
        <View>
            <Text>Home !</Text>
        </View>
    )
}

function Car({navigation}) {
    return(
        <View>
            <Text>Car !</Text>
            <Button title="Ajouter vehicule" onPress={() => navigation.navigate('Ajouter véhicule')}/>
        </View>
    )
}

function Settings() {
    return(
        <View>
            <Text>Settings !</Text>
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