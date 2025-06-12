
// import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
// import React, { useState, useRef } from 'react'


// const imageData = [
//   { id: '1', image: require('./assets/Image.jpg') },
//   { id: '2', image: require('./assets/Image1.jpg') },
//   { id: '3', image: require('./assets/Image3.jpg') },
//   { id: '4', image: require('./assets/Image4.jpg') },
// ];

// const windowWidth = Dimensions.get('window').width;
// const windowHeight=  Dimensions.get('window').height;


// const ImageCarousel = ({ item }) => {
//   return (
//     <View style={styles.image2}>
//       <Image source={item.image} style={styles.Image1} />
//     </View>
//   )
// }

// const App = () => {
//   // Fix 1: Index should be a number, not array
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const flatListRef = useRef(null)

//   // Logic 1: Handle Next Button
//   const handleNext = () => {
//     const nextIndex = (currentIndex + 1) % imageData.length
//     setCurrentIndex(nextIndex)
//     flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true })
//   }

//   // Logic 2: Handle Previous Button  
//   const handlePrevious = () => {
//     const prevIndex = currentIndex === 0 ? imageData.length - 1 : currentIndex - 1
//     setCurrentIndex(prevIndex)
//     flatListRef.current?.scrollToIndex({ index: prevIndex})
//   }

//   // Logic 3: Handle scroll events to update current index
//   const onScrollEnd = (event) => {
//     const contentOffset = event.nativeEvent.contentOffset.x
//     const index = Math.round(contentOffset / windowWidth)
//      console.log(contentOffset,"ContentOffset")
//       console.log(windowWidth,"WINDOWWIDTH")
//     setCurrentIndex(index)
//   }

//   // Logic 4: Render dots indicator
//   const renderDots = () => {
//     return imageData.map((_, index) => (
//       <View
//         key={index}
//         style={[
//           styles.dot,
//           { backgroundColor: index === currentIndex ? '#FFB83A' : '#C4C4C4' }
//         ]}
//       >
// {/* <Text>"</Text> */}

//       </View>
//     ))
//   }

//   return (
//     <>
//       <View style={styles.box}>
//         <Text>Skip</Text>
//       </View>

//       {/* Logic 5: FlatList setup for carousel */}
//       <FlatList
//         ref={flatListRef}
//         data={imageData}
//         renderItem={({ item }) => <ImageCarousel item={item} />}
//         keyExtractor={(item) => item.id}
//         horizontal={true}
//         pagingEnabled={true}
//         // showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={onScrollEnd}
//         // getItemLayout={(data, index) => ({
//         //   length: windowWidth,
//         //   offset: windowWidth * index,
//         //   index,
//         // })}
//       />

//       {/* Navigation buttons */}
//       <View style={styles.buttonNextprev}>
//         <Pressable onPress={handlePrevious}>
//           <Text>{"<"}</Text>
//         </Pressable>
        
//         {/* Dots indicator */}
//         <View style={styles.dotsContainer}>
//           {renderDots()}
//         </View>
        
//         <Pressable onPress={handleNext}>
//           <Text>{">"}</Text>
//         </Pressable>
//       </View>

//       <View style={{ alignItems: 'center', marginTop: 40 }}>
//         <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
//           Let's Find Your Sweet & Dream Place
//         </Text>
//         <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10, color: 'gray' }}>
//           Get the opportunity to stay that you dream of at an affordable price
//         </Text>
//       </View>

//       <Pressable style={styles.button}>
//         <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Next</Text>
//       </Pressable>
//     </>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   box: {
//     marginTop: 70,
//     marginHorizontal: 16,
//     alignItems: 'flex-end',
//     borderColor: 'black'
//   },
//   image2: {
//     marginTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: windowWidth, // Important: Set width for each item
//   },
//   Image1: {
//     height: windowHeight * 0.50,
//     width: windowWidth * 0.92,
//     borderRadius: 10,
//   },
//   button: {
//     alignItems: 'center',
//     padding: 20,
//     marginTop: 40,
//     borderRadius: 5,
//     margin: 10,
//     backgroundColor: '#FFB83A'
//   },
//   buttonNextprev: {
//     padding: 5,
//     margin: 20,
//     flexDirection: "row",
//     alignItems: 'center',
//     justifyContent: "space-between",
//   },
//   dotsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // borderWidth:1,
//     // borderColor:'black',
//     width:windowWidth*0.9
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 3,
//   }
// })

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
