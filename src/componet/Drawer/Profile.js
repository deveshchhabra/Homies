import { Pressable, StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import WrapperComponent from '../WrapperComponent'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { TextElement } from 'react-native-elements/dist/text/Text';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Logout from "../../constants/assets/logout-line.svg"
const Profile = () => {
   const navigation1 = useNavigation();
  return (
    <WrapperComponent>
      <View style={styles.container}>
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
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{fontWeight:'bold',fontSize:22,justifyContent:'center'}}>Room No-001</Text>
      </View>
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
  <Logout />
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
   
  }
  

  // card: {
  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   padding: 15,
  //   margin: 16,
  //   marginTop: 40,
  //   elevation: 3,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4,
  //   shadowOffset: { width: 0, height: 2 },
  // },
})