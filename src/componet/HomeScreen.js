import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageCrousel from './ImageCrousel'
import { windowHeight, windowWidth } from '../constants/config'
import { useNavigation } from '@react-navigation/native';
const Card=()=>{
    return (

        <View style={styles.card} >
            <View>
            <Image 
            source={ require('../constants/assets/Image4.jpg')}
            style={styles.imageCard}
          resizeMethod='cover'
            /> 
            </View>
            <View >
               <View style={styles.card1}>
                <Text>Girl-001</Text>
                <View style={{flexDirection:'row'}}>
            <Text>{'\u2705'}</Text>
            <Text>{'\u2764\uFE0F'}</Text></View>
                </View>
                <Text>heart</Text>
                <Text>Ram Nagar , NT 0872, Katraj</Text>
                <Text>Rent - 5K/Month</Text>

               </View>
        </View>
     
       
    )
}
const HomeScreen = () => {
     const navigation = useNavigation();
  return (
    <Pressable onPress={()=>navigation.navigate('BottomTab')}>
        <ImageCrousel/>
      <Text style={{fontSize:20,padding:17,fontWeight:'bold'}}>Nearby your location</Text>
    <Card/>
    </Pressable>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    card:{
       flexDirection:'row',
       alignContent:'center',
        borderWidth:1,
        borderColor:'#CCCCCC',
        width:windowWidth*0.92,
        height:windowHeight*0.12,
        margin:10,
        padding:10,
        marginHorizontal:10,
         borderRadius:10,
         backgroundColor:'red'
    },
    card1:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
         width:windowWidth*0.6,
    },
    imageCard:{
        height:windowHeight*0.1,
        width:windowWidth*0.20,
        borderRadius:10,
        marginRight:10
        // m
    }
})

