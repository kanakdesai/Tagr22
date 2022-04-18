import { StyleSheet, Text, View, TouchableOpacity,FlatList,Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import {doc, updateDoc, getFirestore,collection, query, where , getDocs, FieldValue, arrayUnion} from "firebase/firestore";
import firebase from 'firebase/compat';
export default function TollPric ({navigation, route})  {
  const { from, to } = route.params 
 
  const [ docId, setDocId] = useState('')
  const [ data , setData  ] = useState([])
  const [ sum , setSum ] = useState('')
  // const charge = data.map(data.charge)
  // console.log(charge)

  const db = getFirestore();

  
  const user = collection(db, "userData");
  
 
  const q = query(user, where("userid", "==", firebase.auth().currentUser.uid));
 
    const AddHistory= async()=>{
      const historyRef = doc(db, "userData", docId);
      await updateDoc(historyRef, {
        History: arrayUnion({
          from: from, to: to
        })
        
      // setModalVisible(!modalVisible)
    })
    
  }



  useEffect(()=>{   
    const getData = async()=>{
      
      
        const querySnapshot = await getDocs(q);
        // setDocId(querySnapshot[0])
        //  console.log("dsfs"+JSON.stringify(querySnapshot))
        querySnapshot.forEach((doc) => {
          setDocId(doc.id)
          console.log(doc.id, " => ", doc.data());
        });
    }
    getData()


      const getTolls=async()=>{
     
      const options = {
          method: 'POST',
          url: 'https://dev.tollguru.com/v1/calc/here',
          headers: {'content-type': 'application/json', 'x-api-key': 'DQhP8LgpR72p6PMQh2tpQMpMnM9rTg7M'},
          data: {
              from: {address: from},
              to: {address: to},
              // waypoints: [{address: 'Plano, TX'}, {address: 'Allen, TX'}],
              vehicleType: '2AxlesAuto',
              departure_time: 1551541566,
              fuelPrice: 2.79,
              fuelPriceCurrency: 'INR',
              fuelEfficiency: {city: 24, hwy: 30, units: 'mpg'},
              truck: {limitedWeight: 44000},
              driver: {wage: 30, rounding: 15, valueOfTime: 0},
              state_mileage: true,
              hos: {
              rule: 60,
              dutyHoursBeforeEndOfWorkDay: 11,
              dutyHoursBeforeRestBreak: 7,
              drivingHoursBeforeEndOfWorkDay: 11,
              timeRemaining: 60
              }
          },
          json: true
          };
      axios(options).then(res=>{
          console.log(res.data.routes[0].costs)
          console.log(res.data.routes[0].tolls)
          let data = []
          res.data.routes[0].tolls.forEach(element => {
              data.push({
                  location: element.road,
                  name : element.name,
                  charge: element.tagOneWay
              })
          });

          setSum(res.data.routes[0].costs.tag)
          setData(data)
      }).catch(err=>{
          console.log(err)
      })
      
      }
      
  
  getTolls()
  },[]);



  return (
    
    <View style={styles.container}>
    <View style={styles.horizontalCont}>
      <Text style={styles.title}>Tolls</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate("Pay");AddHistory();}} style={styles.button}>
            <Text>Pay {sum}</Text>
      </TouchableOpacity>
    </View>
      <View style={styles.flstyle}>
      <FlatList style={styles.flstyle} keyExtractor={(item, index)=> index.toString()} data = {data} renderItem={({item})=>(
               <View  style={styles.dataCont}>
               <Image style={styles.tollPng} source={require('../../../assets/icons/toll.png')}></Image>
                
                    <View style={{justifyContent: 'center'}} >
                        <Text style={styles.fontStyle}>{item.name?item.name:item.location||"Toll Plaza"}</Text>
                        <Text>{item.location}</Text>
                        
                    </View>
                    <Text style={styles.fontStyle1}>₹{item.charge?item.charge:'N/A'}</Text>
                
                </View>
            )}
            ListEmptyComponent={()=>(
                <View>
                <Text style={{color: 'white', alignSelf: 'center', marginTop: hp('20%')}}>Loading tolls...</Text>
                
                </View>
            )}
            
             >
           
            </FlatList>
            </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#252525',
        paddingHorizontal: wp('10%'),
        paddingTop: hp('10%')
    },
    title:{
        fontSize: hp('4%'),
        color: 'white',
        fontWeight: '300'
    },
    horizontalCont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:{
        width: wp('25%'),
        height: hp('5%'),
        backgroundColor: 'orange',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flstyle:{
      // maxHeight: hp('60%'),
      // flex: 1,
      position: 'relative',
      marginBottom: hp('5%')
  },
  dataCont:{

    width: '100%',
    height: hp('9%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: hp('5%'),
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    
},
fontStyle:{
  fontSize: hp('2.5%'),
  fontWeight: '300',
  // paddingTop: hp
  
},
tollPng:{
  resizeMode: 'contain',
  width: wp('15%'),
  height: hp('7%'),
  justifyContent: 'center',
},
fontStyle1:{
  fontSize: hp('2.5%'),
  fontWeight: '300',
  
  alignSelf: 'center'
  
},
})
