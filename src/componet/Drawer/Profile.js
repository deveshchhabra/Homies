// import { Pressable, StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import WrapperComponent from '../WrapperComponent';
// import LinearGradient from 'react-native-linear-gradient';
// import { windowHeight, windowWidth } from '../../constants/config';

// const ScreenHeight = Dimensions.get('window').height;
// const Profile = () => {
//   const navigation1 = useNavigation();
//   // 
//   return (
//     <WrapperComponent>
//       <View style={styles.container} showsVerticalScrollIndicator={false}>
//         <LinearGradient colors={['#010101', '#484848']} style={styles.gradientBackground}>

//                     <View style={styles.icon1}>
//             {/* flex i used */}
//             <Pressable onPress={() => navigation1.goBack()}>
//                 <Ionicons name="arrow-back" size={24} color="white" />
//             </Pressable>

//           </View>





//         </LinearGradient>
//                 <View style={styles.imageContainer}>

//               <Image
//                 source={require("../../constants/assets/Image3.jpg")}
//                 style={styles.profileImage}
//               />
//             </View>
//       </View>

//     </WrapperComponent>

//   )
// }

// export default Profile

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//     padding: 2
//   },
//   gradientBackground: {
//     height: ScreenHeight * 0.19,

//   },
//   icon1: {
//     flexDirection: "row",
//     padding: 10,

//   },
//   profileImage: {
//     height: 160,
//     width: 160,
//     borderRadius: 80,
//     borderWidth: 4,
//     borderColor: "#fff"
//   },
//   imageContainer: {
//     alignItems: 'center',
//     position:"absolute",
//     top:80,
//     left:6,
//     marginLeft:windowWidth*0.3,
//   },


// })







import { Pressable, StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import WrapperComponent from '../WrapperComponent'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
const Profile = () => {
   const navigation1 = useNavigation();
  return (
    <WrapperComponent>
      <LinearGradient colors={['#010101', '#484848']} style={styles.gradientBackground}>
          <Pressable onPress={() => navigation1.goBack()}>
               <Ionicons name="arrow-back" size={24} color="white" style={{margin:10}} />
            </Pressable>
      </LinearGradient>
      <View style={styles.imageContainer}>
       <Image
                source={require("../../constants/assets/Image3.jpg")}
                style={styles.profileImage}
              />
      </View>
      </WrapperComponent>


)
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 1,
     
  },
  gradientBackground:{
    height: ScreenHeight * 0.21,
  },
  imageContainer:{
   
position:"absolute",

   right: ScreenWidth / 2 - 75,
    top: ScreenHeight * 0.130,
  
},
  profileImage:{
    height:160,
    width:160,
    borderRadius: 80,
     borderWidth: 4,
    borderColor: "#fff"
  }
})