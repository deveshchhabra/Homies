import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import WrapperComponent from '../WrapperComponent';
const Help = () => {
     const navigation1 = useNavigation();
  return (
   <WrapperComponent>
      <Text>Help</Text>
        <Pressable  onPress={()=>navigation1.goBack()}>
                              <Text>Go back</Text>
                          </Pressable>
 </WrapperComponent>
  )
}

export default Help

const styles = StyleSheet.create({})