import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Verified = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Verified</Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
              <Text style={styles.buttonText}>Go Back</Text>
            </Pressable>
    </View>
  )
}

export default Verified

const styles = StyleSheet.create({})