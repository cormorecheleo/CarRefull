import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import * as React from "react";

export default function CarScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Car!</Text>
            <StatusBar style="auto" />
        </View>
    );
}