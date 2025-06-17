import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
     const navigation1 = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
        <Pressable  onPress={()=>navigation1.goBack()}>
            <Text>Go back</Text>
        </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})