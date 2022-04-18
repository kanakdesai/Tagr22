import React, { useEffect ,useState} from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {doc, updateDoc, getFirestore,collection, query, where , getDocs, FieldValue, arrayUnion} from "firebase/firestore";
import firebase from 'firebase/compat';
export default function History(){
   const [history , setHistory ] = useState([])
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
            doc.data().History.forEach(element=>{
                data.push({
                from: element.from,
                to: element.to
                })
            });
            setHistory(data)
        });
    }
    getData()
},
[]);
    return(
        <View style={styles.container}>
            <Text style={styles.titleFont}>
                History
            </Text>
            <FlatList keyExtractor={(item, index)=> index.toString()} data={history} renderItem={({item})=>(
                    <View style={styles.cardStyle}>
                        <Image style={styles.iconStyle} source={require('../../assets/icons/travel.png')}></Image>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.cardText}>From: {item.from}</Text>
                        <Text style={styles.cardText}>To: {item.to}</Text>
                       
                    </View>
                    <Text style={styles.cardText}>Charge: ₹{item.charge?item.charge:"N-A"}</Text>
                    </View>
            )

            }
            ListEmptyComponent={()=>(
                <View>
                <Text style={{color: 'white', alignSelf: 'center', marginTop: hp('20%')}}>Loading tolls...</Text>
                
                </View>
            )}
            
            >

            </FlatList>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#252525'
    },
    titleFont:{
        marginTop: hp('10%'),
        marginHorizontal: wp('10%'),
        fontSize: hp('3.5%'),
        color: 'white',
        fontWeight: '300'
    },
    cardStyle:{
        width: wp('85%'),
        height:  hp('10%'),
        marginTop: hp('2%'),
        backgroundColor:  'white',
        alignSelf:'center',
        borderRadius: 10,
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('0.5%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardText:{
        fontSize: hp('2%'),
        fontWeight: '300',
        marginTop: hp('1%')
    },
    iconStyle:{
        resizeMode: 'contain',
        width:  wp('10%'),
        height: hp('8%')
    }
    
});