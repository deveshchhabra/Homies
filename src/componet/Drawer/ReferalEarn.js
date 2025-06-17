import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ReferalEarn = () => {
    const navigation=useNavigation();
  return (
    <View>
      <Text>ReferalEarn</Text>
    <Pressable  onPress={()=>navigation.goBack()}>
        <Text>{"<--"}Go Back </Text>
    </Pressable>
    </View>
  )
}

export default ReferalEarn

const styles = StyleSheet.create({})