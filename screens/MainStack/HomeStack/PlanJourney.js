import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import RNPickerSelect from 'react-native-picker-select';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { auth } from '../../../firebase'
import {doc, updateDoc, getFirestore,collection, query, where , getDocs, FieldValue, arrayUnion} from "firebase/firestore";
import firebase from 'firebase/compat';
export default function PlanJourney  ({navigation})  {
 
  const [vehicles, setVehicles ] = useState([])
  const [ docId, setDocId] = useState('')
  const db = getFirestore();
  
  
  const user = collection(db, "userData");
  
 
  const q = query(user, where("userid", "==", firebase.auth().currentUser.uid));
 
  useEffect(()=>{
    const getData = async()=>{
      
      
    const querySnapshot = await getDocs(q);
    // setDocId(querySnapshot[0])
    //  console.log("dsfs"+JSON.stringify(querySnapshot))
    querySnapshot.forEach((doc) => {
      setDocId(doc.id)
      console.log(doc.id, " => ", doc.data());
      const data = []
      doc.data().vehicleNumber.forEach(element=>{
        data.push({
          bankId: element.bankId,
          fasTag: element.fasTag
        })
      }); setVehicles(data)
      console.log(vehicles)
    });
    }
    getData()
  
  },[])

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select FasTag</Text>
      <FlatList keyExtractor={(item, index)=> index.toString()} data={vehicles} renderItem={({item})=>(
                    <TouchableOpacity onPress={
                      ()=>{  navigation.navigate("Plan",{item});
}}
                       style={styles.cardStyle}>
                        
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.cardText}>Bank: {item.bankId.toUpperCase()}</Text>
                        <Text style={styles.cardText}>Vehicle no: {item.fasTag.toUpperCase()}</Text>
                       
                    </View>
                    
                    </TouchableOpacity>
            )}>

     </FlatList>
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#252525',
    paddingTop: hp('10%'),
    paddingHorizontal: wp('10%')
  },
  title:{
    fontSize: hp('3.5%'),
    color: 'white'
  },
  cardStyle:{
    width: '100%',
    marginTop: hp('5%'),
    height: hp('10%'),
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
})