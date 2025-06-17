import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import WrapperComponent from './WrapperComponent';

const Login = () => {
   const navigation=useNavigation();
  return (
    <WrapperComponent>
      <Text>Login Screen</Text>
      <Pressable onPress={()=>navigation.navigate('LoginOtp')}>
        <Text>
        LoginOtp
        </Text>
      </Pressable>
     <Pressable onPress={()=>navigation.navigate('Drawer')}>
        
      <Text>
     Create as Guest
     </Text>
      </Pressable>

     <Text> Don't have an account ?</Text>
  <Pressable onPress={()=>navigation.navigate('SignUp')}>
      <Text>
    SignUp
     </Text>
      </Pressable>
    </WrapperComponent>
  )
}

export default Login

const styles = StyleSheet.create({})