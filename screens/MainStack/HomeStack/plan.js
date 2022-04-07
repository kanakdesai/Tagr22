import { StyleSheet, Text, View, TextInput , TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import RNPickerSelect from 'react-native-picker-select';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { auth } from '../../../firebase'
import {doc, updateDoc, getFirestore,collection, query, where , getDocs, FieldValue, arrayUnion} from "firebase/firestore";
import firebase from 'firebase/compat';
export default function Plan ({navigation, route}) {
    const { item } = route.params 
    console.log("fdsaf"+item.fasTag)
    const [from , setFrom ] = useState('')
    const [to, setTo ] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Journey</Text>
      <Text style={styles.title2}>Vehicle: {item.fasTag.toUpperCase()}</Text>
      <TextInput value={from} onChangeText={text=>setFrom(text)}  placeholder='From' style={styles.Input}>

      </TextInput>
      <TextInput value={to} onChangeText={text=>setTo(text)} placeholder='To' style={styles.Input}>

      </TextInput>
      <TouchableOpacity onPress={()=>navigation.navigate("TollPrice",{from, to})} style={styles.Button}>
            <Text style={{fontSize: hp('2.5%'), fontWeight: '300'}}>Plan</Text>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#252525',
        paddingHorizontal: wp('10%'),
        paddingTop: hp('12%')
    },
    title:{
        fontSize: hp('3.5%'),
        color: 'white'
      },
      Input:{
          width: '100%',
          height: hp('7%'),
          backgroundColor: 'white',
          marginTop: hp('3.5%'),
          borderRadius: 10,
          fontSize: hp('2.5%'),
          paddingLeft: wp('5%')
      },
      Button:{
          width: wp('35%'),
          height: hp('6%'),
          backgroundColor: 'orange',
          alignSelf: 'center',
          marginTop: hp('5%'),
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center'
      },
      title2:{
          fontSize: hp('3%'),
          color: 'white',
          marginTop: hp('2%')
      }
})