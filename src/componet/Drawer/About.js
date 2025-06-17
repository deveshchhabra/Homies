import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import WrapperComponent from '../WrapperComponent';
const About = () => {
    const navigate=useNavigation();
  return (
    <WrapperComponent>
      <Text>About</Text>
      <Pressable onPress={()=>navigate.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
    </WrapperComponent>
  )
}

export default About

const styles = StyleSheet.create({})