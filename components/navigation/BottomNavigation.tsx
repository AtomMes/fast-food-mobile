import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import FAQScreen from '../../screens/FAQScreen';
import CompanyScreen from '../../screens/CompanyScreen';
import OrderScreen from '../../screens/OrderScreen';

function BottomNavigation() {
   const Tab = createBottomTabNavigator();
 
   return (
     <NavigationContainer>
       <Tab.Navigator>
         <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screen name="FAQ" component={FAQScreen} />
         <Tab.Screen name="Company" component={CompanyScreen} />
         <Tab.Screen name="Order" component={OrderScreen} />
       </Tab.Navigator>
     </NavigationContainer>
   );
 }
 
 export default BottomNavigation;
 