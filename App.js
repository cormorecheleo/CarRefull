import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./Screen/HomeScreen";
import SettingsScreen from "./Screen/SettingScreen";
import CarScreen from "./Screen/CarScreen";


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="home" color={color} size={26}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Car"
                    component={CarScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="car" color={color} size={26}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="cog-outline" color={color} size={26}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}