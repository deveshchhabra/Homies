import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})

// import { Pressable, StyleSheet, Text, View ,Dimensions} from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import WrapperComponent from '../WrapperComponent';
// import LinearGradient from 'react-native-linear-gradient';
// import { Image } from 'react-native-elements';
// const ScreenHeight = Dimensions.get('window').height;
// const Profile = () => {
//      const navigation1 = useNavigation();
     
//   return (
//     <WrapperComponent>
//       <LinearGradient colors={['#010101', '#484848']}>
//       <View style={styles.box1}>
//     <View style={styles.mainProfile}>
     
//         <Pressable  onPress={()=>navigation1.goBack()}>
//           <View style={styles.icon}>
//           <Ionicons name="arrow-back" size={24} color="white" />
//         </View>
//         </Pressable>
        
//     </View>
//     <Image source={require("../../constants/assets/Image3.jpg")}
//     style={styles.image}
//     ></Image>
//      </View>
//      </LinearGradient>
//     </WrapperComponent>
 
//   )
// }

// export default Profile

// const styles = StyleSheet.create({
//   mainBox:{
//     flex:1,
//     flexDirection:'coloumn'
//   },
//   mainProfile:{
//     flex:1,
//     flexDirection:'row',
//     paddingTop:10,
//     borderWidth:1,

    
//   },
//   icon:{
//     padding:4,
//     marginLeft:10
//   },
//   text:{
//     fontWeight:'bold',
//     padding:2,
//     fontSize:20,
//     borderWidth:1,
    
//   },
//  box1:{
// height:ScreenHeight*0.26,
// borderWidth:1,
//   },
//   image:{
//     height:100,
//     width:100,
//     borderRadius:40,
//     flexDirection:'r',
//     justifyContent:"center"
//   }
// })


