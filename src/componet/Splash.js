
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// carouselData.js
 const imageData = [
  { id: '1', image: require('./assets/Image.jpg') },
  { id: '2', image: require('./assets/Image1.jpg') },
  { id: '3', image: require('./assets/Image3.jpg') },
  { id: '4', image: require('./assets/Image4.jpg') },
];


const ImageCrousel=({item})=>{
  // console.log(item)
  return  (
     <>
     
      <View style={styles.image2}>
        <Image 
 style={styles.Image1}
           source={item.image}
        />
        
      </View>

     
    </>
  )
}

const App = () => {
  const [Index, setIndex] = useState([])

  return (
<>
     <View style={styles.box}>
        <Text style={{ color: 'grey', fontFamily: 'Poppins', fontSize: 20 }}>Skip</Text>
      </View>
    <FlatList 
    data={imageData}
    renderItem={ImageCrousel}
    pagingEnabled={true}
    horizontal={true}
   
    />
    <View style={styles.buttonNextprev}>
    <Pressable  onPress={()=>(console.log("pressed"))}><Text style={{fontSize:25}}>{"<"}</Text>
   </Pressable>
     <Pressable ><Text style={{fontSize:24}}>{">"}</Text>
   </Pressable>
   </View>
     <Text style={{ color: '#FFB83A', fontFamily: 'Poppins', fontSize: 30, paddingTop: 20, paddingHorizontal: 20, fontWeight: 'bold' }}>Let’s Find Your<Text style={{ color: 'black' }}> Sweet &
        Dream Place </Text></Text>
      <Text style={{ paddingTop: 20, paddingHorizontal: 20, }}>Get the opportunity to stay that you dream of at an affordable price</Text>
 

       <Pressable style={styles.button} >
        <Text>
          Next
        </Text>
        
        </Pressable>
  </>
  )
}

export default App

const styles = StyleSheet.create({
  box: {
    marginTop: 70,
    marginHorizontal: 16,
    alignItems: 'flex-end',
    borderColor: 'black'
  },
  image2: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  Image1: {
    height: windowHeight * 0.50,
    width: windowWidth * 0.92,
    
    borderRadius: 10,
    // backgroundColor: "red"
  },
  button:{
  //  borderWidth:1,x
  
   alignItems:'center',
   padding:20,
    marginTop:40,
   borderRadius:5,
   margin:10,
   backgroundColor:'#FFB83A'

  },
  buttonNextprev:{
    // borderWidth:2,
    padding:5,
    margin:20,
    // borderColor:'black',
    // flex:1,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"space-between",
    // backgroundColor:'pink'
  }

})
// i want to apply crousel just tell me logic what i applied