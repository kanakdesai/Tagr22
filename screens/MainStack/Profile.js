import React ,{useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, StyleSheet, Text, FlatList, Image,TouchableOpacity } from 'react-native';
import { getFirestore,collection, query, where , getDocs} from "firebase/firestore";
import firebase from 'firebase/compat';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { auth } from '../../firebase'
import RNRestart from 'react-native-restart';
// import { getFirestore, addDoc,documentId,getInstance, getCurrentUser, getUid, Firestore } from 'firebase/firestore';
const Profile = () => {
  const [name , setName ] = useState('')
  const [ phone , setPhone ] = useState('')
  const [ vehicle , setVehicle ] = useState('')
  const [ bank , setBank ] = useState('')
  const getData = async()=>{
    const db = getFirestore();
    const user = collection(db, "userData");
    const q = query(user, where("userid", "==", firebase.auth().currentUser.uid));
    
    const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    setName(doc.data().name)
    setPhone(doc.data().phoneNumber)
    setVehicle(doc.data().vehicleNumber[0].fasTag)
    setBank(doc.data().vehicleNumber[0].bankId)
    console.log(doc.id, " => ", doc.data());
  });
  }
  getData()
  
  // const startReload = ()=> RNRestart.Restart();
  const Logout=()=>{
    // RNRestart.Restart();
    auth.signOut().then(()=>{
      
      console.log('user signed out ')
    })
  }

  // const querySnapshot = await getDocs(q);
  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.secCont}>
          <Image style={styles.ImageStyle} source={require('../../assets/icons/profileIcon.png')}></Image>
          <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.capsule}>
            <Feather name="phone" size={24} color="black" />
            <Text style={styles.secFont}>{phone}</Text>
      </View>
      <View style={styles.capsule}>
            <AntDesign name="car" size={24} color="black" />
            <Text style={styles.secFont}>{vehicle}</Text>
      </View>
      <View style={styles.capsule}>
            <AntDesign name="bank" size={24} color="black" />
            <Text style={styles.secFont}>{bank}</Text>
      </View>
      <TouchableOpacity onPress={()=>{Logout()}} style={styles.capsule}>
            <AntDesign name="logout" size={24} color="black" />
            <Text style={styles.secFont}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#252525',
    flex: 1,
    paddingHorizontal: wp('10%'),
    paddingTop: hp('8%')
  },
  title:{
    fontSize: hp('3.5%'),
    color: 'white',
    fontWeight: '300'
  },
  secCont:{
    width: '100%',
    height: '30%',
    backgroundColor: '#191919',
    borderRadius: 5,
    marginTop: hp('2%'),
    shadowColor: 'white',
    shadowOffset: {height:1,width: -1},
    shadowRadius: 7,
    shadowOpacity: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ImageStyle:{
    resizeMode: 'contain',
    width: wp('45%'),
    height: hp('15%'),
    
  },
  name:{
    alignSelf: 'center',
    color: 'white',
    fontSize: hp('2%'),
    marginTop: hp('1%')
  },
  capsule:{
    width: '100%',
    height: hp('6%'),
    backgroundColor: 'white',
    marginTop: hp('5%'),
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: hp('3%'),
    flexDirection: 'row'
  },
  secFont:{
    fontSize: hp('2.2%'),
    paddingHorizontal: wp('5%'),
  }
})