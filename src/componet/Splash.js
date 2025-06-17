
import {  Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageCrousel from './ImageCrousel'
import { useNavigation } from '@react-navigation/native';


const App = () => {
const navigation=useNavigation();
  return (
    <View style={{backgroundColor:"#FFFFFF"}}>
      <View style={styles.box}>
        <Text style={{ color: 'grey', fontFamily: 'Poppins', fontSize: 20 }}>Ski</Text>
      </View>


      <ImageCrousel />


      <Text style={{ color: '#FFB83A', fontFamily: 'Poppins', fontSize: 30, paddingTop: 20, paddingHorizontal: 20, fontWeight: 'bold' }}>Let’s Find Your<Text style={{ color: 'black' }}> Sweet &
        Dream Place </Text></Text>
      <Text style={{ paddingTop: 20, paddingHorizontal: 20, }}>Get the opportunity to stay that you dream of at an affordable price</Text>


      <Pressable style={styles.button} onPress={()=>navigation.navigate('Login')} >
        <Text>
          Next
        </Text>

      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  box: {
    // marginTop: 10,
    marginHorizontal: 20,
    alignItems: 'flex-end',

  },

  button: {
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
    borderRadius: 9,
    margin: 10,
    backgroundColor: '#FFB83A'

  },
  buttonNextprev: {
    padding: 5,
    margin: 20,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",

  }

})


// CAROUSEL LOGIC EXPLANATION:
// 1. Use currentIndex (number) to track which image is currently visible
// 2. FlatList with horizontal={true} and pagingEnabled={true} for swipe behavior
// 3. handleNext/handlePrevious functions to navigate programmatically
// 4. onMomentumScrollEnd to update currentIndex when user swipes
// 5. getItemLayout for smooth scrolling performance
// 6. Dots indicator to show current position
// 7. scrollToIndex() method to jump to specific image

