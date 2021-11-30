import React, { useState } from "react";
import {StatusBar, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {firebase} from "../firebase/config";

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Register')
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if(!firestoreDocument.exists){
                            alert("User does not exist anymore")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Home', {user})
                    })
                    .catch(error =>{
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <KeyboardAwareScrollView
            style={{ flex:1, width: '100%'}}
            keyboardShoulPersistTaps="always">
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"/>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCapitalize="none"/>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account ? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text> </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        flex:1,
        height: 120,
        width: 90,
        alignSelf:'center',
        margin: 30
    },
    input: {
        height: 40,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex:1,
        alignItems: 'center',
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: '#788eec',
        fontSize:16,
        fontWeight: "bold"
    }

});