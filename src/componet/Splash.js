
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// carouselData.js
const imageData = [
  { id: '1', image: require('./assets/Image.jpg') },
  { id: '2', image: require('./assets/Image1.jpg') },
  { id: '3', image: require('./assets/Image3.jpg') },
  { id: '4', image: require('./assets/Image4.jpg') },
];


const ImageCrousel = ({ item }) => {
  
  return (
    <View style={styles.image2}>
      <Image
        style={styles.Image1}
        source={item.image}
      />
    </View>
  )
}

const App = () => {
  const [CurrentIndex, setCurrentIndex] = useState([])
  const flatListRef=useRef(null);
const scrollEnd=(event)=>{
  const contentOffset=event.nativeEvent.contentOffset.x;
  console.log(contentOffset,"contentoffset")
  const Index=Math.floor(contentOffset/windowWidth);
  setCurrentIndex(Index);
}

const dotsLogic=()=>{
  return imageData.map((_,index)=>(
    <View 
    key={index}
    style={[styles.dot,{backgroundColor:index===CurrentIndex? '#FFB83A' : '#C4C4C4' }]}//what this line 
    />

  ))
}
  return (
    <>
      <View style={styles.box}>
        <Text style={{ color: 'grey', fontFamily: 'Poppins', fontSize: 20 }}>Skip</Text>
      </View>
      <FlatList
      ref={flatListRef}
        data={imageData}
        renderItem={ImageCrousel}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={scrollEnd}
      />
      <View style={styles.buttonNextprev}>
        {/* <Pressable onPress={() => (console.log("pressed"))}><Text style={{ fontSize: 25 }}>{"<"}</Text>
        </Pressable> */}
        <View style={styles.dotsContainer}> 
        {dotsLogic()}
        </View>
      
        {/* <Pressable ><Text style={{ fontSize: 24 }}>{">"}</Text>
        </Pressable> */}
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
    // borderColor: 'black'
  },
  image2: {
     width: windowWidth ,//change is here
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    //  borderWidth:2,
  

  },
  Image1: {
    height: windowHeight * 0.50,
    width: windowWidth * 0.92,
    borderRadius: 10,
   
    // backgroundColor: "red"
  },
  button: {
    //  borderWidth:1,x

    alignItems: 'center',
    padding: 20,
    marginTop: 40,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#FFB83A'

  },
  buttonNextprev: {
    // borderWidth:2,
    padding: 5,
    margin: 20,
    // borderColor:'black',
    // flex:1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    // backgroundColor:'pink'
  },
  dotsContainer: {
    flexDirection: 'row',
    padding:7,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
    // borderColor:'black',
    width:windowWidth*0.9
  },
  dot: {
    width: 8,
    height: 8,
     border:1,
    borderRadius: 4,
    marginHorizontal: 3,
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

