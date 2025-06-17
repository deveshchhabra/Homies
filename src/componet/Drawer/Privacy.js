import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import WrapperComponent from '../WrapperComponent';
const Privacy = () => {
   const navigation1 = useNavigation();
    return (

       <WrapperComponent>

      <Text>Privacy</Text>
      <Pressable  onPress={()=>navigation1.goBack()}>
                        <Text>Go back</Text>
                    </Pressable>
    </WrapperComponent>
  
  )
}

export default Privacy

const styles = StyleSheet.create({})