import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from '../HomeScreen';
import History from './History';
import Offers from './Offers';
import Profile from './Profile';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeStack from './homeStack';
import { LogBox } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ['Setting a timer for a long period of time']
]);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function MainNavigator({navigation, route}) {
  return (
    <Tab.Navigator 
     navigationOptions={{
        headerLeft: null,
        gesturesEnabled: false,
        
        
       }}
      screenOptions={{
        tabBarInactiveTintColor: 'black',
        
        tabBarBadgeStyle: 'orange',
        tabBarInactiveBackgroundColor: '#252525',
        headerShown: false,
        tabBarStyle
        :{
          height: hp('7%'),
          borderTopColor: '#F8C59B',
          backgroundColor: '#252525',
          
        },
       
      }}
      >
        <Tab.Screen 
        
        options={{
            
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={25} color="grey" />
           ),
          
        }} 
       
        name="Home" component={HomeStack}/>
        <Tab.Screen 
        
            options={{
            
            tabBarIcon: ({ color }) => (
                <FontAwesome5 name="history" size={25} color="grey" />
            
                
            ),
            }} 
        
            name="History" component={History}/>
        <Tab.Screen 
        
            options={{
            
            tabBarIcon: ({ color }) => (
                <Ionicons name="gift" size={25} color="grey" />
                
            ),
            }} 
        
            name="Offers" component={Offers}/>
        <Tab.Screen 
        
            options={{
            
            tabBarIcon: ({ color }) => (
                <Ionicons name="person" size={25} color="grey" />
            
                
            ),
            }} 
        
            name="Profile" component={Profile}/>
        </Tab.Navigator>
  );
}
  

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
