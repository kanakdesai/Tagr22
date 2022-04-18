import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Balance from './HomeStack/Balance'
import HomeScreen from '../HomeScreen';
import Tolls from './HomeStack/Tolls'
import Manage from './HomeStack/manage'
import { createStackNavigator } from '@react-navigation/stack';
import PlanJourney from './HomeStack/PlanJourney'
import Plan from './HomeStack/plan';
import TollPrice from './HomeStack/TollPrice';
import Pay from './HomeStack/Pay'
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <NavigationContainer independent= {true}>
      <Stack.Navigator  
      
          screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
         <Stack.Screen name="PlanJourney" component={PlanJourney}/>
        <Stack.Screen name="Tolls" component={Tolls}/>
        <Stack.Screen name="Plan" component={Plan}/>

        <Stack.Screen name="TollPrice" component={TollPrice}/>
        {/* <Stack.Screen name = "Recharge" component={Recharge}/> */}
        {/* <Stack.Screen name = 'Pay' component={Pay}/> */}
        {/* <Stack.Screen name = 'Stripe' component={Stripe}/> */}
        {/* <Stack.Screen name = "BuyFasTag" component={BuyFasTag}/> */}
        <Stack.Screen name = 'CheckBalance' component={Balance}/>
        <Stack.Screen name = "Manage" component={Manage}/>
        <Stack.Screen name = 'Pay' component={Pay}/>
        {/* <Stack.Screen name = 'Rewards' component={Rewards}/>  */}
      </Stack.Navigator>
    </NavigationContainer>
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
