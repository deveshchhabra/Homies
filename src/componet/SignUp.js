import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

// import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>SignUp</Text>
      <Pressable onPress={() => navigation.navigate('LoginOtp')} style={styles.button}>
              <Text style={styles.buttonText}>→ </Text>
            </Pressable>
            <Pressable onPress={() => navigation.goBack()} style={styles.button}>
              <Text style={styles.buttonText}> ← </Text>
            </Pressable>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})


// HomeScreen
//    └── Login → OtpScreen → Verified
//                        ←        ←
//                  (navigate back)


// HomeScreen
//    └── SignUp → OtpScreen → Verified
//                               ←         ←
//                         (navigate back)
