import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

const MyImage = () => {
  return (
    <Image 
    source={{uri:"https://www.tripplannersindia.com/assets/images/page/Rameshwaram_(4).webp"}}
   style={styles.image}
    />
  )
}

export default MyImage

const styles = StyleSheet.create({

    image: {
    width: 80,
    height: 80,
    borderRadius:45
  },
})