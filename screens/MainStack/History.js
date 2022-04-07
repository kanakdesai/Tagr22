import React, { useEffect ,useState} from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function History(){
    // const [history, setHistory]= useState([])
    // useEffect(()=>{
    //     const getHistoy=async()=>{
    //         const tokenValue = await AsyncStorage.getItem('Token')
    //         const numberValue = await AsyncStorage.getItem('PhoneNumber')
    //         axios.post('http://192.168.29.244:5000/user-history',
    //         {
    //             phone: numberValue    
    //         },
    //         {
    //             headers:{
    //                 'Authorization': `Bearer ${tokenValue}`
    //             }
    //         })
    //         .then(res=>{
    //             console.log(res.data)
    //             const data = []
    //             res.data.data.forEach(element => {
    //                 data.push({
    //                     from : element.from,
    //                     to : element.to,
    //                     charge : element.charge
    //                 })

    //             });
    //             setHistory(data)
    //         })
    //         .catch(err=>{console.log(err)})
    //     }
    //     getHistoy()
    // },[])

    return(
        <View style={styles.container}>
            <Text style={styles.titleFont}>
                History
            </Text>
            {/* <FlatList keyExtractor={(item, index)=> index.toString()} data={history} renderItem={({item})=>(
                    <View style={styles.cardStyle}>
                        <Image style={styles.iconStyle} source={require('../../assets/icons/travel.png')}></Image>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.cardText}>From: {item.from}</Text>
                        <Text style={styles.cardText}>To: {item.to}</Text>
                       
                    </View>
                    <Text style={styles.cardText}>Charge: ₹{item.charge}</Text>
                    </View>
            )

            }>

            </FlatList> */}
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