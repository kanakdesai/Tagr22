import { StyleSheet, Text, TextInput, View ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import { auth } from '../firebase'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import firebase from 'firebase/compat';
import { getFirestore, collection, getDocs, addDoc,documentId,getInstance, getCurrentUser, getUid, Firestore } from 'firebase/firestore';
const CreateProfile = () => {

    const db = getFirestore();
    const navigation = useNavigation()
    // console.log('the user is '+firebase.auth().currentUser.uid)
    // const uid = getInstance().getCurrentUser().getUid();
    const colref = collection(db, 'userData');
    const saveData =()=>{
        addDoc(colref, {
            bank: tag ,
            name: name ,
            phoneNumber: phone,
            vehicleNumber: [{fasTag: vehicleNo, bankId: tag}],
            userid: firebase.auth().currentUser.uid
        }).then(()=>navigation.replace('HomeStack'))
    }




    // let user = firebase.auth().currentUser
    // let uid = user.uid
    // let yourdata = { foo: 'something', bar: 'other'}
    const [tag , setTag] = useState('')
    const [phone , setPhone ] = useState('');
    const [vehicleNo, setVehicleNo] = useState('');
    const [ name , setName ] = useState('')
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Text style={styles.title}>Create Profile</Text>
      <TextInput 
      placeholder='Name'
      style={styles.InputStyle}
      value={name}
      onChangeText={text=>setName(text)}
      />
       <TextInput 
      placeholder='Phone Number'
      style={styles.InputStyle}
      keyboardType='numeric'
      value={phone}
      onChangeText={text => setPhone(text)}
      />
       <TextInput 
      autoCapitalize='words'
      placeholder='Vehicle Number'
      style={styles.InputStyle}
      
      value={vehicleNo}
      onChangeText={text=>setVehicleNo(text)}
      />
      <View style={styles.InputStyle}>

    <RNPickerSelect
            key={1}
            placeholderTextColor={'grey'}
            fixAndroidTouchableBug={true}
            // placeholder={'Select FasTag'}
            style={{
                
                    inputIOS:{
                        // color:  'Black',
                        // fontSize: '6%',

                    },
                    inputAndroid:{
                        // color: 'Black',
                        // fontSize: '4%'
                    }
                }}
            onValueChange={(value)=>{setTag(value)}}
            items={[
                { label: 'Paytm Bank FastTag', value: 'Paytm Bank FasTag' },
                { label: 'ICICI Bank FastTag', value: 'ICICI Bank FasTag' },
                { label: 'Airtel Payemnts Bank FastTag', value: 'Airtel Payemnts Bank FastTag' },
                { label: 'Allahabad Bank FastTag', value: 'Allahabad Bank FastTag' },
                { label: 'HDFC Bank FastTag', value: 'HDFC Bank FastTag' },
                { label: 'IDBI Bank FastTag', value: 'IDBI Bank FastTag' },
                { label: 'Other ', value: 'Other' },
            ]}
        />
    </View>
    <View style={styles.buttonContainer}>
            <TouchableOpacity style = {styles.button} onPress={()=>saveData()}>
                <Text style={{color: 'black', fontWeight: '700'}}>Save</Text>
            </TouchableOpacity>
            

        </View>

    </KeyboardAwareScrollView>
  )
}

export default CreateProfile

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#252525',
        flex :1,
        paddingTop: '18%',
        paddingHorizontal: '10%'
    },
    buttonContainer:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: '10%'
    },
    button:{
        backgroundColor: 'orange',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
        
    },
    title:{
        fontSize: 35,
        color: 'white',
        fontWeight: '300'
    },
    InputStyle:{
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: 'white',
    },
})