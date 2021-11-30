import * as React from "react";
import {Button, Picker, StyleSheet, Text, TextInput, View} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddVehiculeScreen() {
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
                        onPress={()=>{console.log(marque)}}
                    />
                </View>
            </View>
        </>
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