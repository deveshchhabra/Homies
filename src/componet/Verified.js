import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import WrapperComponent from './WrapperComponent';
   
   

const Verified = () => {
    const navigation = useNavigation();
  return (
<WrapperComponent>
      <Text>Verified</Text>
        <Pressable onPress={()=>navigation.navigate('Drawer')}>
              
            <Text>
           HomeScreen
           </Text>
            </Pressable>
      
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
              <Text style={styles.buttonText}>Go Back</Text>
            </Pressable>
   </WrapperComponent>
  )
}

export default Verified

const styles = StyleSheet.create({})