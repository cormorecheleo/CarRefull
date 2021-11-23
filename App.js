import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Picker, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';


function AddVehiculeScreen() {
    const [marque, setMarque] = React.useState(null);
    const [modele, setModele] = React.useState(null);
    const currentDate = new Date();
    const [chosenDate, setChosenDate] = React.useState(currentDate);
    const [plaque, setPlaque] = React.useState(null);
    const [select, setSelect] = React.useState(null);
    const [kilometre, setKilometre] = React.useState(null);

    return (
        <>
            <View style={style.AddVehiculeTitle}>
                <Text>Ajouter nouveau véhicule</Text>
            </View>
            <View style={style.AddVehiculeBody}>
                <View style={style.FormGroup}>
                    <Text>Vehicule :</Text>
                    <Picker
                        selectedValue={select}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelect(itemValue)}>
                        <Picker.Item label="Voiture (B1-B)" value="voiture" />
                        <Picker.Item label="Moto (A2-A)" value="moto" />
                        <Picker.Item label="Cyclomoteur léger (AM-A1)" value="cyclomoteur leger" />
                        <Picker.Item label="Camion" value="camion" />
                        <Picker.Item label="Bus" value="bus" />
                    </Picker>
                </View>
                <View style={style.FormGroup}>
                    <Text>Marque :</Text>
                    <TextInput
                        style={style.Input}
                        onChangeText={setMarque}
                        placeholder="Entrer une marque"
                    />
                </View>
                <View style={style.FormGroup}>
                    <Text>Modèle :</Text>
                    <TextInput
                        style={style.Input}
                        onChangeText={setModele}
                        placeholder="Entrer une modele"
                    />
                </View>
                <View style={style.FormGroup}>
                    <Text>Année de mise en circulation :</Text>
                    <DateTimePicker
                        value={currentDate}
                        mode='date'
                        display="default"
                        maximumDate={currentDate}
                        onChange={setChosenDate}
                    />
                </View>
                <View style={style.FormGroup}>
                    <Text>Plaque immatriculation :</Text>
                    <TextInput
                        style={style.Input}
                        onChangeText={setPlaque}
                        placeholder="AA000BB"
                    />
                </View>
                <View style={style.FormGroup}>
                    <Text>Kilométrage :</Text>
                    <TextInput
                        style={style.Input}
                        onChangeText={setKilometre}
                        placeholder="Ex: 1584050"
                    />
                </View>
                <View style={style.FormGroup}>
                    <Button
                        title="Valider"
                    />
                </View>
            </View>
        </>
    );
}


function HomeScreen() {
    return (
        <View style={style.HomeView}>
            <StatusBar style="auto" />
            <Text>Accueil!</Text>
        </View>
    );
}


function VehiculeScreen({ navigation }) {
    return (
        <>
            <View style={style.VehiculeButton}>
                <Button
                    title='Ajouter véhicule'
                    onPress={() => navigation.navigate('Ajouter vehicule')}
                />
            </View>
            <View style={style.VehiculeView}>
                <Text>Vehicule!</Text>
                <StatusBar style="auto" />
            </View>
        </>
    );
}


function SettingsScreen() {
    return (
        <View style={style.Settings}>
            <Text>Paramètres!</Text>
            <StatusBar style="auto" />
        </View>
    );
}


const Stack = createNativeStackNavigator();


function VehiculeStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Vehicule" component={VehiculeScreen} />
            <Stack.Screen name="Ajouter vehicule" component={AddVehiculeScreen} />
        </Stack.Navigator>
    );
}


const Tab = createBottomTabNavigator();


export default function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Accueil"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Vehicule"
                    component={VehiculeStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="car" color={color} size={26} />
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Parametres"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const style = StyleSheet.create({
    AddVehiculeTitle: {
        alignItems: 'center',
        margin: 10,
        fontSize: 200
    },
    HomeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    VehiculeButton: {
        alignItems: 'flex-end'
    },
    VehiculeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Settings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Input: {
        height: 40,
        borderWidth: 1,
        padding: 10
    },
    FormGroup: {
        margin: 'auto'
    }

})