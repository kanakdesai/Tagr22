import React, { useEffect ,useState} from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Offers(){
    
   

    return(
        <View style={styles.container}>
            <Text style={styles.titleFont}>
                Offers
            </Text>
            <Text style={styles.ptext}>
              No offers available.
            </Text>
            
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
    },
    ptext:{
      alignSelf: 'center',
      marginTop: hp('30%'),
      color: 'white'
    }
    
});