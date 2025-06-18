// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Camera = () => {
//   return (
//     <View style={styles.screenContainer}>
//       <Text>Camera</Text>
//     </View>
//   )
// }

// const ChatReq = () => {
//   return (
//     <View style={styles.screenContainer}>
//       <Text>Chat</Text>
//     </View>
//   )
// }

// const Call = () => {
//   return (
//     <View style={styles.screenContainer}>
//       <Text>Call</Text>
//     </View>
//   )
// }

// const Status = () => {
//   return (
//     <View style={styles.screenContainer}>
//       <Text>Status</Text>
//     </View>
//   )
// }

// const Tab = createMaterialTopTabNavigator();

// const Chat = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="ChatReq"
//       screenOptions={{
//         tabBarActiveTintColor: 'white',
//         tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
//         tabBarIndicatorStyle: {
//           backgroundColor: "white",
//           height: 3,
//         },
//         tabBarStyle: {
//           backgroundColor: "#075e54",
//           elevation: 0,
//           shadowOpacity: 0,
//         },
//         tabBarLabelStyle: {
//           fontSize: 14,
//           fontWeight: '500',
//           textTransform: 'uppercase',
//         },
//         tabBarItemStyle: {
//           paddingVertical: 12,
//         },
//       }}
//     >
//       <Tab.Screen
//         name='CAMERA'
//         component={Camera}
//         options={{
//           tabBarShowLabel: false,
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? 'camera' : 'camera-outline'}
//               size={24}
//               color="white"
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="ChatReq"
//         component={ChatReq}
//         options={{
//           tabBarLabel: ({ focused }) => (
//             <View style={styles.tabLabelContainer}>
//               <Text style={[styles.tabLabel, { fontWeight: focused ? 'bold' : '500' }]}>
//                 CHATS
//               </Text>
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>3</Text>
//               </View>
//             </View>
//           ),
//         }}
//       />

//       <Tab.Screen 
//         name="Status" 
//         component={Status}
//         options={{
//           tabBarLabel: ({ focused }) => (
//             <View style={styles.tabLabelContainer}>
//               <Text style={[styles.tabLabel, { fontWeight: focused ? 'bold' : '500' }]}>
//                 STATUS
//               </Text>
//               <View style={styles.statusBadge} />
//             </View>
//           ),
//         }} 
//       />

//       <Tab.Screen 
//         name="Call" 
//         component={Call}
//         options={{
//           tabBarLabel: 'CALLS',
//         }} 
//       />
//     </Tab.Navigator>
//   )
// }

// export default Chat

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   tabLabelContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   tabLabel: {
//     color: 'white',
//     fontSize: 14,
//     textTransform: 'uppercase',
//   },
//   badge: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     paddingHorizontal: 5,
//     paddingVertical: 1,
//     marginLeft: 6,
//     minWidth: 18,
//     height: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   badgeText: {
//     color: '#075e54',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   statusBadge: {
//     backgroundColor: 'white',
//     borderRadius: 4,
//     width: 8,
//     height: 8,
//     marginLeft: 6,
//   },

// })

