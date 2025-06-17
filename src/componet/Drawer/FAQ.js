import { StyleSheet,Pressable , Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import WrapperComponent from '../../componet/WrapperComponent';
const FAQ = () => {
      const navigate=useNavigation();
  return (
    <WrapperComponent>
      <Text>FAQ</Text>
       <Pressable onPress={()=>navigate.goBack()}>
              <Text>Go Back</Text>
            </Pressable>
 </WrapperComponent>
  )
}

export default FAQ

const styles = StyleSheet.create({})