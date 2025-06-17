import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LoginOtp from '../componet/LoginOtp';
import SignUp from '../componet/SignUp';
import LoginGuest from '../componet/LoginGuest';
import Verified from '../componet/Verified';
import BottomTab from '../componet/HomeScreen';
// import Property from '../componet/Property/Property';
import Profile from '../componet/Drawer/Profile';
import Splash from '../componet/Splash';
import Login from '../componet/Login';
import Drawer from './Drawer';
import FindProperty from '../componet/Drawer/FindProperty';
import ReferalEarn from '../componet/Drawer/ReferalEarn';
import RateReview from '../componet/Drawer/RateReview';
import ContactUs from "../componet/Drawer/ContactUs"
import PrivacyPolicy from "../componet/Drawer/Privacy"
import TermCondition from "../componet/Drawer/TermsCondition"
import AboutUs from "../componet/Drawer/About"
import Faq from "../componet/Drawer/FAQ"
import Help from '../componet/Drawer/Help';
const Stack = createStackNavigator();
const MyMainStack = () => {
   return (
      <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

         <Stack.Screen name="Home" component={Splash} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="LoginOtp" component={LoginOtp} />
         <Stack.Screen name="Verified" component={Verified} />
         <Stack.Screen name="LoginGuest" component={LoginGuest} />
         <Stack.Screen name="SignUp" component={SignUp} />
         <Stack.Screen name="BottomTab" component={BottomTab} />
         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="FindProperty" component={FindProperty} />
         <Stack.Screen name="ReferalEarn" component={ReferalEarn} />
         <Stack.Screen name="RateReview" component={RateReview} />
         <Stack.Screen name="ContactUs" component={ContactUs} />
         <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
         <Stack.Screen name="TermCondition" component={TermCondition} />
         <Stack.Screen name="Aboutus" component={AboutUs} />
         <Stack.Screen name="FAQ" component={Faq} />
          <Stack.Screen name="Help" component={Help} />

         <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
   </>
   )
}


export default MyMainStack


const styles = StyleSheet.create({})


