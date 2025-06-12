
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Splash from './src/componet/Splash';
import Login from './src/componet/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginOtp from './src/componet/LoginOtp';
import SignUp from './src/componet/SignUp';
import LoginGuest from './src/componet/LoginGuest';
import Verified from './src/componet/Verified';
 const Stack = createStackNavigator();

 const MyStack=()=>{
  return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
  
        <Stack.Screen name="Home" component={Splash} />
         <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoginOtp" component={LoginOtp} />
           <Stack.Screen name="Verified" component={Verified} />
            <Stack.Screen name="LoginGuest" component={LoginGuest} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
  )
 }
const App = () => {
 
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
         <NavigationContainer>
       <MyStack/>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

