import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const RateReview = () => {
      const navigation1 = useNavigation();
  return (
    <View>
      <Text>RateReview</Text>
       <Pressable  onPress={()=>navigation1.goBack()}>
                  <Text>{"<--"}Go back</Text>
              </Pressable>
    </View>
  )
}

export default RateReview

const styles = StyleSheet.create({})