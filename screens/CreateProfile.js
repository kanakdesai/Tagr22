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
                { label: 'Airtel Payments Bank ', value: 'Airtel Payments Bank' },
                { label: 'AU small finance bank ', value: 'AU small finance bank' },
                { label: 'Axis Bank Ltd ', value: 'Axis Bank Ltd' },
                { label: 'Bank of Baroda ', value: 'Bank of Baroda' },
                { label: 'Bank of Maharashtra ', value: 'Bank of Maharashtra' },
                { label: 'Canara Bank ', value: 'Canara Bank' },
                { label: 'Central Bank of India ', value: 'Central Bank of India' },
                { label: 'City Union Bank Ltd ', value: 'City Union Bank Ltd' },
                { label: 'Cosmos Bank ', value: 'Cosmos Bank' },
                { label: 'Dombivli Nagari Sahakari Bank ', value: 'Dombivli Nagari Sahakari Bank' },
                { label: 'Equitas Small Finance Bank ', value: 'Equitas Small Finance Bank' },
                { label: 'Federal Bank ', value: 'Federal Bank' },
                { label: 'FINO Payments Bank ', value: 'FINO Payments Bank' },
                { label: 'HDFC Bank ', value: 'HDFC Bank' },
                { label: 'ICICI Bank ', value: 'ICICI Bank' },
                { label: 'IDBI Bank ', value: 'IDBI Bank' },
                { label: 'IDFC First Bank ', value: 'IDFC First Bank' },
                { label: 'Indian Bank ', value: 'Indian Bank' },
                { label: 'Indian Overseas Bank ', value: 'Indian Overseas Bank' },
                { label: 'IndusInd Bank Ltd. ', value: 'IndusInd Bank Ltd.' },
                { label: 'Jammu and Kashmir Bank ', value: 'Jammu and Kashmir Bank' },
                { label: 'Karnataka Bank ', value: 'Karnataka Bank' },
                { label: 'Karur Vysya Bank ', value: 'Karur Vysya Bank' },
                { label: 'Kotak Mahindra Bank ', value: 'Kotak Mahindra Bank' },
                { label: 'Nagpur Nagarik Sahakari Bank ', value: 'Nagpur Nagarik Sahakari Bank' },
                { label: 'PAYTM Payments Bank ', value: 'PAYTM Payments Bank' },
                { label: '*Punjab & Maharashtra Co-operative Bank ', value: '*Punjab & Maharashtra Co-operative Bank' },
                { label: 'Punjab National Bank ', value: 'Punjab National Bank' },
                { label: 'Saraswat Bank ', value: 'Saraswat Bank' },
                { label: 'South Indian Bank ', value: 'South Indian Bank' },
                { label: 'State Bank of India ', value: 'State Bank of India' },
                { label: 'Syndicate Bank ', value: 'Syndicate Bank' },
                { label: 'The Jalgaon People Co-op Bank', value: 'The Jalgaon People Co-op Bank' },
                { label: 'Thrissur District Cooperative Bank (Kerala Bank)', value: 'Thrissur District Cooperative Bank (Kerala Bank)' },
                { label: 'UCO Bank', value: 'UCO Bank' },
                { label: 'Union Bank of India', value: 'Union Bank of India' },
                { label: 'Yes Bank Ltd', value: 'Yes Bank Ltd' },

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