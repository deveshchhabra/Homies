import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TermsCondition = () => {
    const navigate=useNavigation();
  return (
    <View>
      <Text>TermsCondition</Text>
      <Pressable onPress={()=>navigate.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  )
}

export default TermsCondition

const styles = StyleSheet.create({})