import { KeyboardAvoidingView, StyleSheet, Text,Image, View,TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const LoginScreen = () => {
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const navigation = useNavigation()
    // useEffect(()=>{
    //     const unsubscribe = auth.onAuthStateChanged(user=>{
    //         if(user){
    //             navigation.navigate("Home")
    //         } 
    //     })
    //     return unsubscribe
    // },[])



    const handleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log(user.email);
            navigation.replace("CreateProfile")
        })
        .catch(error=>alert(error.message))
    }

    const handleLogin=()=>{
        auth.signInWithEmailAndPassword(email, password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log('Logged in with', user.email);
            navigation.replace("HomeStack")
        })
        .catch(error=> alert(error.message))
    }

  return (
    <KeyboardAvoidingView  style = {styles.container} >
   
    <Image style={styles.ImageStyle} source={require('../assets/mainLogo.png')}></Image>
      <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.InputStyle}
      />
      <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text=>setPassword(text)}
          style={styles.InputStyle}
          secureTextEntry
      />
        <View style={styles.buttonContainer}>
            <TouchableOpacity style = {styles.button} onPress={handleLogin}>
                <Text style={{color: 'black', fontWeight: '700'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button2} onPress={handleSignUp}>
                <Text style={{color: 'orange', fontWeight: '700'}}>Register</Text>
            </TouchableOpacity>

        </View>
       
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252525'
    },
    InputStyle:{
        width: '80%',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'white',
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button:{
        backgroundColor: 'orange',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
        
    },
    button2:{
        backgroundColor: '#292929',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 2,
        marginTop: 5,
        alignItems: 'center'
    },
    ImageStyle:{
        resizeMode: 'contain',
        alignSelf: 'center',
        width: '60%',
        height: '20%'
    }

    
})