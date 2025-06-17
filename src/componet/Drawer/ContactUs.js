import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import WrapperComponent from '../WrapperComponent';
const ContactUs = () => {
    const navigation=useNavigation();
  return (
   <WrapperComponent>
      <Text>ContactUs</Text>
      <Pressable onPress={()=>navigation.goBack()}>
        <Text>On Press</Text>
      </Pressable>
   </WrapperComponent>
  )
}

export default ContactUs

const styles = StyleSheet.create({})