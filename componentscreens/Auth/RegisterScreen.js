import {Text, View, TouchableOpacity, TextInput, Image} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import React, {useState} from "react";
import {firebase} from "../../firebase/config";
import styles from "./AuthStyle";
import {LinearGradient} from "expo-linear-gradient";
import Motorcycle from "../../assets/motorbike.png";

export default function RegisterScreen({navigation}){

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {

        if(password !== confirmPassword) {
            alert("Password don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error)=> {
                alert(error)
            });

    }

    return(
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{flex:1, width: '100%'}}>
                <View style={styles.logoView}>
                    <Image style={styles.motorcycleLogo} source={Motorcycle}/>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    autoCapitalize="none"/>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    autoCapitalize="none"/>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCapitalize="none"/>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    autoCapitalize="none"/>
                <TouchableOpacity
                    onPress={()=>onRegisterPress()}>
                    <LinearGradient colors={["rgba(0,120,255,1)", "black"]} style={styles.button} end={{x:1.1, y:0.5}}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}






