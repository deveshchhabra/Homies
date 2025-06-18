// // import { Pressable, StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import { useNavigation } from '@react-navigation/native';
// // import WrapperComponent from '../WrapperComponent';
// // const Privacy = () => {
// //    const navigation1 = useNavigation();
// //     return (

// //        <WrapperComponent>

// //       <Text>Privacy</Text>
// //       <Pressable  onPress={()=>navigation1.goBack()}>
// //                         <Text>Go back</Text>
// //                     </Pressable>
// //     </WrapperComponent>
  
// //   )
// // }

// // export default Privacy

// // const styles = StyleSheet.create({})


// import { Pressable, StyleSheet, Text, TextInput, View, Dimensions, ScrollView, Alert } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import WrapperComponent from '../WrapperComponent';
// import LinearGradient from 'react-native-linear-gradient';
// import { Image } from 'react-native-elements';
// import * as ImagePicker from 'expo-image-picker'; // For image picking (optional, you can also do native)

// const ScreenHeight = Dimensions.get('window').height;

// const Profile = () => {
//   const navigation1 = useNavigation();

//   const [name, setName] = useState('Deniela Chikitiani');
//   const [mobile, setMobile] = useState('+463 634 6774');
//   const [email, setEmail] = useState('daniela@gmail.com');
//   const [profileImage, setProfileImage] = useState(require("../../constants/assets/Image3.jpg"));

//   const [editMode, setEditMode] = useState({
//     name: false,
//     mobile: false,
//     email: false,
//   });

//   const pickImage = async () => {
//     // Ask permissions
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       Alert.alert("Permission denied", "You need to allow camera roll permissions.");
//       return;
//     }

//     let pickerResult = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//     });

//     if (!pickerResult.canceled && pickerResult.assets.length > 0) {
//       setProfileImage({ uri: pickerResult.assets[0].uri });
//     }
//   };

//   return (
//     <WrapperComponent>
//       <LinearGradient colors={['#010101', '#484848']} style={styles.gradientBackground}>
//         <View style={styles.headerContainer}>
//           <Pressable onPress={() => navigation1.goBack()} style={styles.backIcon}>
//             <Ionicons name="arrow-back" size={24} color="white" />
//           </Pressable>

//           <View style={styles.profileImageContainer}>
//             <Image
//               source={profileImage}
//               style={styles.profileImage}
//             />
//             <Pressable style={styles.editIconContainer} onPress={pickImage}>
//               <Ionicons name="create-outline" size={18} color="#555" />
//             </Pressable>
//           </View>
//         </View>
//       </LinearGradient>

//       <ScrollView contentContainerStyle={styles.infoContainer}>
//         <View style={styles.infoCard}>
//           {/* Name */}
//           <View style={styles.infoRow}>
//             <Ionicons name="person-outline" size={20} color="#000" />
//             <View style={styles.infoTextContainer}>
//               <Text style={styles.infoLabel}>Name</Text>
//               {editMode.name ? (
//                 <TextInput
//                   value={name}
//                   onChangeText={setName}
//                   style={styles.inputField}
//                   autoFocus
//                   onBlur={() => setEditMode({ ...editMode, name: false })}
//                 />
//               ) : (
//                 <Text style={styles.infoValue}>{name}</Text>
//               )}
//             </View>
//             <Pressable onPress={() => setEditMode({ ...editMode, name: true })}>
//               <Ionicons name="create-outline" size={16} color="#555" />
//             </Pressable>
//           </View>

//           {/* Mobile */}
//           <View style={styles.infoRow}>
//             <Ionicons name="call-outline" size={20} color="#000" />
//             <View style={styles.infoTextContainer}>
//               <Text style={styles.infoLabel}>Mobile Number</Text>
//               {editMode.mobile ? (
//                 <TextInput
//                   value={mobile}
//                   onChangeText={setMobile}
//                   style={styles.inputField}
//                   keyboardType="phone-pad"
//                   autoFocus
//                   onBlur={() => setEditMode({ ...editMode, mobile: false })}
//                 />
//               ) : (
//                 <Text style={styles.infoValue}>{mobile}</Text>
//               )}
//             </View>
//             <Pressable onPress={() => setEditMode({ ...editMode, mobile: true })}>
//               <Ionicons name="create-outline" size={16} color="#555" />
//             </Pressable>
//           </View>

//           {/* Email */}
//           <View style={styles.infoRow}>
//             <Ionicons name="mail-outline" size={20} color="#000" />
//             <View style={styles.infoTextContainer}>
//               <Text style={styles.infoLabel}>Email</Text>
//               {editMode.email ? (
//                 <TextInput
//                   value={email}
//                   onChangeText={setEmail}
//                   style={styles.inputField}
//                   keyboardType="email-address"
//                   autoFocus
//                   onBlur={() => setEditMode({ ...editMode, email: false })}
//                 />
//               ) : (
//                 <Text style={styles.infoValue}>{email}</Text>
//               )}
//             </View>
//             <Pressable onPress={() => setEditMode({ ...editMode, email: true })}>
//               <Ionicons name="create-outline" size={16} color="#555" />
//             </Pressable>
//           </View>
//         </View>
//       </ScrollView>
//     </WrapperComponent>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   gradientBackground: {
//     height: ScreenHeight * 0.28,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingTop: 50,
//   },
//   headerContainer: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   backIcon: {
//     position: 'absolute',
//     top: 10,
//     left: 10,
//     padding: 6,
//   },
//   profileImageContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   profileImage: {
//     height: 120,
//     width: 120,
//     borderRadius: 60,
//     borderWidth: 3,
//     borderColor: '#fff',
//   },
//   editIconContainer: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 4,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   infoContainer: {
//     paddingTop: 60,
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   infoCard: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   infoTextContainer: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   infoLabel: {
//     fontWeight: 'bold',
//     fontSize: 14,
//     marginBottom: 4,
//   },
//   infoValue: {
//     color: '#666',
//     fontSize: 14,
//   },
//   inputField: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#999',
//     fontSize: 14,
//     paddingVertical: 4,
//     color: '#333',
//   },

// });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Privacy = () => {
  return (
    <View>
      <Text>Privacy</Text>
    </View>
  )
}

export default Privacy

const styles = StyleSheet.create({})