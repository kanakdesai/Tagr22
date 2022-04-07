import React from 'react';
import { View, SafeAreaView,StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { Surface, Checkbox } from 'react-native-paper';
export default function HomeScreen({navigation}){
    return(
        <LinearGradient start={{x: 3, y: 0}} end={{x: 6, y: 3}} colors={['#252525', '#572400']} style={styles.container}>
        <SafeAreaView >
            
                <Text style={styles.fontStyle}>Hello!!</Text>
            <TouchableOpacity  onPress={()=>navigation.navigate('PlanJourney')}>
                <View style={styles.mainImg}>
                
                    <Image style={styles.ImageStyle} source={require('../assets/icons/planjourney.png')}></Image>
                 
                </View>
            {/* <LinearGradient style={styles.mainButton} start={{x: 3, y: 0}} end={{x: 0, y: 5}} colors={['#f63062','orange']} > */}
               
                    {/* <Text style={styles.fontstyle2}>Plan a Journey</Text> */}
            {/* </LinearGradient> */}
            </TouchableOpacity>
            <View style={styles.fullIconCont}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.iconCont} onPress={()=>navigation.navigate('Recharge')}>
                        <Image style={styles.iconImage} source={require('../assets/icons/recharge.png')}></Image>
                        <Text style={{color: 'black', fontWeight: '300',fontSize: hp('1.2%')}}>Recharge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCont} onPress={()=>navigation.navigate('CheckBalance')}>
                        <Image style={styles.iconImage} source={require('../assets/icons/balance.png')}></Image>
                        <Text style={{color: 'black', fontWeight: '300', marginTop: 2,fontSize: hp('1.2%')}}>Balance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCont} onPress={()=>navigation.navigate('Manage')}>
                        <Image style={styles.iconImage} source={require('../assets/icons/manage.png')}></Image>
                        <Text style={{color: 'black', fontWeight: '300',fontSize: hp('1.2%')}}>Manage</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginTop:hp('4%')}}>
                <TouchableOpacity style={styles.iconCont} onPress={()=>navigation.navigate('RechargeFriend')}>
                        <Image style={styles.iconImage} source={require('../assets/icons/rechargeFriend.png')}></Image>
                        <Text style={{fontSize: hp('1.2%'),color: 'black', fontWeight: '300'}}>Recharge for friend</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCont} onPress={()=>navigation.navigate('BuyFasTag')}>
                        <Image style={styles.iconImage} source={require('../assets/icons/pp1.png')}></Image>
                        <Text style={{color: 'black', fontWeight: '300', marginTop: 2,fontSize: hp('1.2%')}}>Fuel Recharge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCont} onPress={()=>navigation.navigate('Rewards')}>
                        <Image style={styles.iconImage} source={require('../assets/icons/reward1.png')}></Image>
                        <Text style={{color: 'black', fontWeight: '300',fontSize: hp('1.2%')}}>Rewards</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#424242'
    },
    topCont:{
        // marginTop: hp('5%'),
        width: wp('100%'),
        height:hp('10%'),
        backgroundColor: '#252525',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 20
    },
    fontStyle:{
        fontSize: hp('3.5%'),
        color: 'white',
        fontWeight: '300',
        alignSelf: 'flex-start',
        marginTop: hp('4%'),
        marginHorizontal: wp('8%')
    },
    mainButton:{
        flexDirection: 'row',
        marginTop:hp('4%'),
        marginHorizontal: wp('10%'),
        width: wp('90%'),
        height: hp('25%'),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 20,
        borderRadius: 10,
        backgroundColor: 'orange',

    },
    ImageStyle:{
        // resizeMode: 'contain',
        width: wp('100%'),
        height: hp('28%'),
        marginVertical:hp('2%'),
        alignSelf: 'center',
        
        justifyContent: 'center',
        resizeMode: 'contain',
        borderRadius: 20
        
        
        
    },
    fontstyle2: {
        marginLeft: wp('5%'),
        fontSize: hp('2.5%'),
        color:'white',
        fontWeight: '600'
    },
    iconImage:{
        resizeMode:'contain',
        width: wp('25%'),
        height: hp('10%')
    },
    iconCont:{
        width: wp('26%'),
        height: hp('13%'),
        backgroundColor: 'grey',
        marginHorizontal: wp('3%'),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    fullIconCont:{
        marginTop: hp('6%'),
        marginHorizontal: wp('5%'),
        alignItems: 'center'
    },
    mainImg:{
        marginTop: hp('5%'),
        marginHorizontal: wp('4%'),
        height: hp('30%'),
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
    
});