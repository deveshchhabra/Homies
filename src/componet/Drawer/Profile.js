// import { Pressable, StyleSheet, Text, View,Dimensions, Image } from 'react-native'
// import React from 'react'
// import LinearGradient from 'react-native-linear-gradient'
// import WrapperComponent from '../WrapperComponent'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { TextElement } from 'react-native-elements/dist/text/Text';
// const ScreenHeight = Dimensions.get('window').height;
// const ScreenWidth = Dimensions.get('window').width;
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// import Logout from "../../constants/assets/logout-line.svg"
// const Profile = () => {
//    const navigation1 = useNavigation();
//   return (
//     <WrapperComponent>
//       <View style={styles.container}>
//       <LinearGradient colors={['#010101', '#484848']} style={styles.gradientBackground}>
//           <Pressable onPress={() => navigation1.goBack()}>
//                <Ionicons name="arrow-back" size={24} color="white" style={{margin:10}} />
//             </Pressable>
//       </LinearGradient>
//       <View style={styles.imageContainer}>
//        <Image
//                 source={require("../../constants/assets/Image3.jpg")}
//                 style={styles.profileImage}
//               />
//       </View>
//       <View style={{ justifyContent: 'center', alignItems: 'center', }}>
//         <Text style={{fontWeight:'bold',fontSize:22,justifyContent:'center'}}>Room No-001</Text>
//       </View>
// </View>
// <View style={styles.card}>
// <Text style={styles.name}>Name</Text>
// <Text style={styles.name1}>Deniela Chiktiani</Text>
// <Text style={styles.name}>Mobile</Text>
// <Text style={styles.name1}>+463 634 6774</Text>
// <Text style={styles.name}>Email</Text>
// <Text style={styles.name1}>daniela@gmail.com</Text>
// <Text style={styles.name}>College Name</Text>
// <Text style={styles.name1}>Hans Raj College</Text>
// </View>
// <View style={styles.card}>
// <Text style={styles.name}>See All Document Details</Text>
// </View>
// <View style={styles.cardlog}>
//   <Logout />
//   <Text style={{marginLeft:10,marginTop:6,fontWeight:'500'}}>Login Out</Text>
// </View>
// <View>
//   <Text style={styles.log}>Leave Property</Text>
// </View>
// <View>
//   <Text style={styles.log}>Delete</Text>
// </View>
     

//       </WrapperComponent>


// )
// }

// export default Profile

// const styles = StyleSheet.create({


//   gradientBackground:{
//     height: ScreenHeight * 0.21,
//   },
//   imageContainer:{
 
//    alignItems: 'center',
//     marginTop: -80,
  
// },
//   profileImage:{
//     height:160,
//     width:160,
//     borderRadius: 80,
 
//     borderColor: "#fff"
//   },
//   card:{
//     backgroundColor:"#fff",
//     padding:15,
//     margin:16,
//     marginTop:10,
//     elevation:3,
//     shadowColor:'#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     shadowOffset: { width: 1, height: 3 },
//   }
//   ,name:{
//   fontWeight:"bold",
//   margin:5
//   }

//    ,name1:{
//   fontWeight:"thin",
//   margin:5
//   },
//   log:{
//     fontWeight:'500',
//    marginLeft:24,
//       margin:10,
      
//   },
//   cardlog:{
//     flexDirection:'row',
//     paddingLeft:20,
   
//   }
  

//   // card: {
//   //   backgroundColor: '#fff',
//   //   borderRadius: 10,
//   //   padding: 15,
//   //   margin: 16,
//   //   marginTop: 40,
//   //   elevation: 3,
//   //   shadowColor: '#000',
//   //   shadowOpacity: 0.1,
//   //   shadowRadius: 4,
//   //   shadowOffset: { width: 0, height: 2 },
//   // },
// })


import { Pressable, StyleSheet, Text, View,Dimensions, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import WrapperComponent from '../WrapperComponent'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { TextElement } from 'react-native-elements/dist/text/Text';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Logout from "../../constants/assets/logout-line.svg"
import { Button } from 'react-native-elements';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const Profile = () => {
   const navigation1 = useNavigation();
   const imageSource = Photo ? Photo : require("../../constants/assets/Image3.jpg");
   const [modal,setModal]=useState(false);
   const [Photo,setPhoto]=useState(null);

   const selectImage=()=>{
    const options={
      mediaType:"photo",
      maxWidth:300,
      maxHieght:300,
      quality:1,
    };
    launchImageLibrary(options,(response)=>{
      console.log(response,"launchImageLibrary")
      if(!response.didCancel &&!response.errorCode){
const source = { uri: response.assets[0].uri };
setPhoto(source);
setModal(false);

      }
    })
   }

   const openCamera=()=>{
    const options={
       mediaType: 'photo',
      saveToPhotos: true,
    };
     launchCamera(options, (response) => {
      if (!response.didCancel && !response.errorCode) {
        const source = { uri: response.assets[0].uri };
        setPhoto(source);
        setModal(false); // close modal after capture
      }})
   }
  return (
    <WrapperComponent>
      <View style={styles.container}>
      <LinearGradient colors={['#010101', '#484848']} style={styles.gradientBackground}>
          <Pressable onPress={() => navigation1.goBack()}>
               <Ionicons name="arrow-back" size={24} color="white" style={{margin:10}} />
            </Pressable>
      </LinearGradient>
      <View style={styles.imageContainer}>
     

<Image source={imageSource} style={styles.profileImage} />

      </View>
       {/* ICON BUTTON */}
        <View style={{ flexDirection: 'row', justifyContent: "center", marginLeft: 90, marginTop: -20 }}>
          <Pressable onPress={() => setModal(true)}>
            <Icon name="open-in-new" size={30} color="#858789" />
          </Pressable>
        </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{fontWeight:'bold',fontSize:22,justifyContent:'center'}}>Room No-001</Text>
      </View>z

      <Modal visible={modal} transparent animationType='slide'>
      
        <View style={styles.modalContainer}>
           <View style={styles.modalContent}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 20,color:'white' }}>Upload Photo</Text>
<Pressable title="Select from Gallery" style={{padding:10}}
onPress={selectImage}
 >
  <Text style={{color:'white'}}>Select from Gallery</Text>
  </Pressable>
            <Pressable title="open Camera" style={{padding:10}} onPress={openCamera}>
              <Text style={{color:'white'}}>Open Camera</Text>
              </Pressable>
              <Pressable onPress={()=>setModal(false)} >
              <Text style={{color:"white",paddingLeft:10,marginLeft:20}}>Close</Text>
            </Pressable>

           </View>

        </View>
      </Modal>
</View>
<View style={styles.card}>
<Text style={styles.name}>Name</Text>
<Text style={styles.name1}>Deniela Chiktiani</Text>
<Text style={styles.name}>Mobile</Text>
<Text style={styles.name1}>+463 634 6774</Text>
<Text style={styles.name}>Email</Text>
<Text style={styles.name1}>daniela@gmail.com</Text>
<Text style={styles.name}>College Name</Text>
<Text style={styles.name1}>Hans Raj College</Text>
</View>
<View style={styles.card}>
<Text style={styles.name}>See All Document Details</Text>
</View>
<View style={styles.cardlog}>
  {/* <Logout /> */}
  <Text style={{marginLeft:10,marginTop:6,fontWeight:'500'}}>Login Out</Text>
</View>
<View>
  <Text style={styles.log}>Leave Property</Text>
</View>
<View>
  <Text style={styles.log}>Delete</Text>
</View>
     

      </WrapperComponent>


)
}

export default Profile

const styles = StyleSheet.create({


  gradientBackground:{
    height: ScreenHeight * 0.21,
  },
  imageContainer:{
 
   alignItems: 'center',
    marginTop: -80,
  
},
  profileImage:{
    height:160,
    width:160,
    borderRadius: 80,
 
    borderColor: "#fff"
  },
  card:{
    backgroundColor:"#fff",
    padding:15,
    margin:16,
    marginTop:10,
    elevation:3,
    shadowColor:'#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 3 },
  }
  ,name:{
  fontWeight:"bold",
  margin:5
  }

   ,name1:{
  fontWeight:"thin",
  margin:5
  },
  log:{
    fontWeight:'500',
   marginLeft:24,
      margin:10,
      
  },
  cardlog:{
    flexDirection:'row',
    paddingLeft:20,
   
  },
   modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
   }}
  )