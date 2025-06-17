// // // import { StyleSheet, Text, View } from 'react-native'
// // // import React from 'react'

// // // const Home = () => {
// // //   return (
// // //     <View>
// // //       <Text>Home</Text>
// // //     </View>
// // //   )
// // // }

// // // export default Home

// // // const styles = StyleSheet.create({})

// // import React, { lazy } from 'react';
// // import { View, Text, StyleSheet } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';

// // const Drawer = createDrawerNavigator();

// // // Dummy Screens
// // function HomeScreen() {
// //   return (
// //     <View style={styles.screen}>
// //       <Text style={styles.title}>Home Screen</Text>
// //     </View>
// //   );
// // }

// // function ProfileScreen() {
// //   return (
// //     <View style={styles.screen}>
// //       <Text style={styles.title}>Profile Screen</Text>
// //     </View>
// //   );
// // }

// // export default function App() {
// //   return (
// //     // <NavigationContainer>
// //       <Drawer.Navigator
// //         screenOptions={{
// //           drawerType: 'back', // 👈 This makes it a traditional overlay drawer
// //           drawerStatusBarAnimation:"font",
// //           lazy:true
       
// //         }}
// //       >
// //         <Drawer.Screen name="Home" 
// //         options={{title:"homdd"}}
// //         component={HomeScreen} />
// //         <Drawer.Screen name="Profile" component={ProfileScreen} />
// //       </Drawer.Navigator>
// //     // {/* </NavigationContainer> */}
// //   );
// // }

// // const styles = StyleSheet.create({
// //   screen: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //   },
// // });


// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import Ionicons from 'react-native-vector-icons/Ionicons'; // 👈 Make sure you installed this

// // const Drawer = createDrawerNavigator();

// // // Dummy Screens
// // function HomeScreen() {
// //   return (
// //     <View style={styles.screen}>
// //       <Text style={styles.title}>Home Screen</Text>
// //     </View>
// //   );
// // }

// // function ProfileScreen() {
// //   return (
// //     <View style={styles.screen}>
// //       <Text style={styles.title}>Profile Screen</Text>
// //     </View>
// //   );
// // }

// // export default function App() {
// //   return (
// //     // <NavigationContainer>
// //       <Drawer.Navigator
// //         screenOptions={{
// //           drawerType: 'back',
// //           drawerStatusBarAnimation: 'fade',
// //           lazy: true,
// //              drawerLabelStyle: {
// //       color: 'black',
// //       fontSize: 20,
// //       fontFamily: 'Georgia',
// //     },
// //         }}
// //       >
// //         <Drawer.Screen
// //           name="Home"
// //           component={HomeScreen}
// //           options={{
// //             drawerLabel: 'Home',
// //             drawerIcon: ({ focused, color, size }) => (
// //               <Ionicons
// //                 name={focused ? 'home' : 'home-outline'}
// //                 size={size}
// //                 color={color}
// //               />
// //             ),
// //           }}
// //         />
// //         <Drawer.Screen
// //           name="Profile"
// //           component={ProfileScreen}
// //           options={{
// //             drawerLabel: 'Profile',
// //             drawerIcon: ({ focused, color, size }) => (
// //               <Ionicons
// //                 name={focused ? 'person' : 'person-outline'}
// //                 size={size}
// //                 color={color}
// //               />
// //             ),
// //           }}
// //         />
// //       </Drawer.Navigator>
// //     // {/* </NavigationContainer> */}
// //   );
// // }

// // const styles = StyleSheet.create({
// //   screen: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //   },
// // });

// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import Ionicons from 'react-native-vector-icons/Ionicons';

// // const Drawer = createDrawerNavigator();

// // function HomeScreen() {
// //   return (
// //     <View style={styles.screen}>
// //       <Text style={styles.title}>Home Screen</Text>
// //     </View>
// //   );
// // }

// // function ProfileScreen() {
// //   return (
// //     <View style={styles.screen}>
// //       <Text style={styles.title}>Profile Screen</Text>
// //     </View>
// //   );
// // }

// // export default function App() {
// //   return (
// //     // <NavigationContainer>
// //       <Drawer.Navigator
// //         screenOptions={{
// //           drawerType: 'sl',
// //           drawerStatusBarAnimation: 'fade',
// //           lazy: true,
// //           drawerLabelStyle: {
// //             color: 'black',
// //             fontSize: 20,
// //             fontFamily: 'Georgia',
// //           },
// //           drawerContentContainerStyle: {
// //             // backgroundColor: 'pink', // ✅ custom style here
// //             paddingVertical: 10,
// //             paddingHorizontal: 5,
// //           },
// //             drawerStyle: {
// //       // backgroundColor: '#c6cbef',
// //       width: 240,
// //     },
// //      sceneContainerStyle: {
// //       backgroundColor: 'pink', // 🎯 Apply your custom style here
// //       padding: 10,
// //     },
          
// //         }}
// //       >
// //         <Drawer.Screen
// //           name="Home"
// //           component={HomeScreen}
// //           options={{
// //             drawerLabel: 'Home',
// //             drawerIcon: ({ focused, color, size }) => (
// //               <Ionicons
// //                 name={focused ? 'home' : 'home-outline'}
// //                 size={size}
// //                 color={color}
// //               />
// //             ),
// //           }}
// //         />
// //         <Drawer.Screen
// //           name="Profile"
// //           component={ProfileScreen}
// //           options={{
// //             drawerLabel: 'Profile',
// //             drawerIcon: ({ focused, color, size }) => (
// //               <Ionicons
// //                 name={focused ? 'person' : 'person-outline'}
// //                 size={size}
// //                 color={color}
// //               />
// //             ),
// //           }}
// //         />
// //       </Drawer.Navigator>
// //     // {/* </NavigationContainer> */}
// //   );
// // }

// // const styles = StyleSheet.create({
// //   screen: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //   },
// // });
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';

// // const Drawer = createDrawerNavigator();

// // // Dummy screens
// // function HomeScreen() {
// //   return (
// //     <View style={styles.screen}>
// //       <Text style={styles.title}>Home Screen</Text>
// //     </View>
// //   );
// // }

// // function ProfileScreen() {
// //   return (
// //     <View style={styles.screen}>
// //       <Text style={styles.title}>Profile Screen</Text>
// //     </View>
// //   );
// // }

// // export default function App() {
// //   return (
// //    // <NavigationContainer>
// //       <Drawer.Navigator
// //         screenOptions={{
// //           swipeEnabled: true,         // allow swipe gestures
// //           swipeEdgeWidth: 50,         // distance from edge that triggers swipe
// //           swipeMinDistance: 20,       // minimum swipe distance to open
// //         }}
// //       >
// //         <Drawer.Screen name="Home" component={HomeScreen} />
// //         <Drawer.Screen name="Profile" component={ProfileScreen} />
// //       </Drawer.Navigator>
// //    // {/* </NavigationContainer> */}
// //   );
// // }

// // const styles = StyleSheet.create({
// //   screen: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 24,
// //   },
// // });


// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
// import Animated, { 
//   useSharedValue, 
//   useAnimatedStyle, 
//   withSpring,
//   runOnJS 
// } from 'react-native-reanimated';

// const Drawer = createDrawerNavigator();

// // Custom Drawer Content with Gestures
// const CustomDrawerContent = (props) => {
//   const scale = useSharedValue(1);
//   const translateY = useSharedValue(0);

//   const tapGesture = Gesture.Tap()
//     .numberOfTaps(2)
//     .onEnd(() => {
//       scale.value = withSpring(0.95, {}, () => {
//         scale.value = withSpring(1);
//       });
//     });

//   const panGesture = Gesture.Pan()
//     .onUpdate((event) => {
//       translateY.value = event.translationY * 0.5;
//     })
//     .onEnd(() => {
//       translateY.value = withSpring(0);
//     });

//   const combinedGesture = Gesture.Simultaneous(tapGesture, panGesture);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { scale: scale.value },
//         { translateY: translateY.value }
//       ],
//     };
//   });

//   return (
//     <DrawerContentScrollView {...props}>
//       <GestureDetector gesture={combinedGesture}>
//         <Animated.View style={[styles.drawerHeader, animatedStyle]}>
//           <Text style={styles.drawerHeaderText}>My App</Text>
//           <Text style={styles.drawerSubtext}>Double tap or drag me!</Text>
//         </Animated.View>
//       </GestureDetector>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// };

// // Home Screen with Drawer Gestures
// const HomeScreen = ({ navigation }) => {
//   const translateX = useSharedValue(0);
//   const isDrawerOpen = useSharedValue(false);

//   // Custom gesture to open drawer
//   const swipeGesture = Gesture.Pan()
//     .onUpdate((event) => {
//       // Only respond to swipe from left edge
//       if (event.translationX > 0 && event.absoluteX < 50) {
//         translateX.value = Math.min(event.translationX, 100);
//       }
//     })
//     .onEnd((event) => {
//       if (event.translationX > 50 && event.absoluteX < 100) {
//         // Open drawer
//         runOnJS(navigation.openDrawer)();
//       }
//       translateX.value = withSpring(0);
//     });

//   // Long press to toggle drawer
//   const longPressGesture = Gesture.LongPress()
//     .minDuration(1000)
//     .onEnd(() => {
//       runOnJS(() => {
//         if (navigation.getState().history?.some(item => item.type === 'drawer')) {
//           navigation.closeDrawer();
//         } else {
//           navigation.openDrawer();
//         }
//       })();
//     });

//   const combinedGesture = Gesture.Simultaneous(swipeGesture, longPressGesture);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateX: translateX.value }],
//     };
//   });

//   return (
//     <GestureDetector gesture={combinedGesture}>
//       <Animated.View style={[styles.screen, animatedStyle]}>
//         <View style={styles.gestureIndicator} />
//         <Text style={styles.title}>Home Screen</Text>
//         <Text style={styles.instructions}>
//           • Swipe from left edge to open drawer{'\n'}
//           • Long press (1s) to toggle drawer{'\n'}
//           • Use menu button below
//         </Text>
        
//         <TouchableOpacity 
//           style={styles.menuButton}
//           onPress={() => navigation.openDrawer()}
//         >
//           <Text style={styles.menuButtonText}>☰ Open Drawer</Text>
//         </TouchableOpacity>

//         <View style={styles.gestureDemo}>
//           <Text style={styles.gestureDemoTitle}>Gesture Demo Area</Text>
//           <InteractiveBox />
//         </View>
//       </Animated.View>
//     </GestureDetector>
//   );
// };

// // Interactive component within the screen
// const InteractiveBox = () => {
//   const scale = useSharedValue(1);
//   const rotation = useSharedValue(0);
//   const backgroundColor = useSharedValue('#4CAF50');

//   const tapGesture = Gesture.Tap()
//     .onEnd(() => {
//       scale.value = withSpring(scale.value === 1 ? 1.2 : 1);
//     });

//   const rotationGesture = Gesture.Rotation()
//     .onUpdate((event) => {
//       rotation.value = event.rotation;
//     })
//     .onEnd(() => {
//       rotation.value = withSpring(0);
//     });

//   const longPressGesture = Gesture.LongPress()
//     .minDuration(500)
//     .onStart(() => {
//       backgroundColor.value = '#FF5722';
//     })
//     .onEnd(() => {
//       backgroundColor.value = '#4CAF50';
//     });

//   const gestureComposition = Gesture.Simultaneous(
//     tapGesture,
//     rotationGesture,
//     longPressGesture
//   );

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { scale: scale.value },
//         { rotateZ: `${rotation.value}rad` }
//       ],
//       backgroundColor: backgroundColor.value,
//     };
//   });

//   return (
//     <GestureDetector gesture={gestureComposition}>
//       <Animated.View style={[styles.interactiveBox, animatedStyle]}>
//         <Text style={styles.boxText}>
//           Tap • Rotate • Long Press
//         </Text>
//       </Animated.View>
//     </GestureDetector>
//   );
// };

// // Settings Screen
// const SettingsScreen = ({ navigation }) => {
//   const slideValue = useSharedValue(0);

//   const slideGesture = Gesture.Pan()
//     .onUpdate((event) => {
//       slideValue.value = event.translationX;
//     })
//     .onEnd((event) => {
//       if (event.translationX > 100) {
//         runOnJS(navigation.goBack)();
//       }
//       slideValue.value = withSpring(0);
//     });

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateX: slideValue.value }],
//     };
//   });

//   return (
//     <GestureDetector gesture={slideGesture}>
//       <Animated.View style={[styles.screen, animatedStyle]}>
//         <Text style={styles.title}>Settings Screen</Text>
//         <Text style={styles.instructions}>
//           Swipe right to go back
//         </Text>
        
//         <TouchableOpacity 
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Text style={styles.menuButtonText}>← Go Back</Text>
//         </TouchableOpacity>
//       </Animated.View>
//     </GestureDetector>
//   );
// };

// // Profile Screen with Pinch Gesture
// const ProfileScreen = () => {
//   const scale = useSharedValue(1);
//   const translateX = useSharedValue(0);
//   const translateY = useSharedValue(0);

//   const pinchGesture = Gesture.Pinch()
//     .onUpdate((event) => {
//       scale.value = Math.max(0.5, Math.min(event.scale, 3));
//     })
//     .onEnd(() => {
//       scale.value = withSpring(1);
//     });

//   const panGesture = Gesture.Pan()
//     .onUpdate((event) => {
//       translateX.value = event.translationX;
//       translateY.value = event.translationY;
//     })
//     .onEnd(() => {
//       translateX.value = withSpring(0);
//       translateY.value = withSpring(0);
//     });

//   const combinedGesture = Gesture.Simultaneous(pinchGesture, panGesture);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { scale: scale.value },
//         { translateX: translateX.value },
//         { translateY: translateY.value }
//       ],
//     };
//   });

//   return (
//     <View style={styles.screen}>
//       <Text style={styles.title}>Profile Screen</Text>
//       <Text style={styles.instructions}>
//         Pinch to zoom • Drag to move the avatar
//       </Text>
      
//       <GestureDetector gesture={combinedGesture}>
//         <Animated.View style={[styles.avatar, animatedStyle]}>
//           <Text style={styles.avatarText}>👤</Text>
//         </Animated.View>
//       </GestureDetector>
//     </View>
//   );
// };

// // Main App Component
// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//     {/* //  <NavigationContainer> */}
//         <Drawer.Navigator
//           initialRouteName="Home"
//           drawerContent={(props) => <CustomDrawerContent {...props} />}
//           screenOptions={{
//             drawerStyle: {
//               backgroundColor: '#f8f9fa',
//               width: 280,
//             },
//             drawerActiveTintColor: '#4CAF50',
//             drawerInactiveTintColor: '#666',
//             headerStyle: {
//               backgroundColor: '#4CAF50',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//             // Enable gestures for drawer
//             swipeEnabled: true,
//             swipeEdgeWidth: 50, // Width of the edge where swipe is detected
//             swipeMinDistance: 10, // Minimum distance to trigger swipe
//           }}
//         >
//           <Drawer.Screen 
//             name="Home" 
//             component={HomeScreen}
//             options={{
//               drawerLabel: 'Home',
//               title: 'Home',
//             }}
//           />
//           <Drawer.Screen 
//             name="Profile" 
//             component={ProfileScreen}
//             options={{
//               drawerLabel: 'Profile',
//               title: 'Profile',
//             }}
//           />
//           <Drawer.Screen 
//             name="Settings" 
//             component={SettingsScreen}
//             options={{
//               drawerLabel: 'Settings',
//               title: 'Settings',
//             }}
//           />
//         </Drawer.Navigator>
//      {/* //</NavigationContainer> */}
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   instructions: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 24,
//   },
//   gestureIndicator: {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     bottom: 0,
//     width: 3,
//     backgroundColor: '#4CAF50',
//     opacity: 0.3,
//   },
//   menuButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   backButton: {
//     backgroundColor: '#2196F3',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   menuButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   drawerHeader: {
//     padding: 20,
//     backgroundColor: '#4CAF50',
//     marginBottom: 10,
//     borderRadius: 10,
//     margin: 10,
//   },
//   drawerHeaderText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   drawerSubtext: {
//     fontSize: 14,
//     color: 'rgba(255,255,255,0.8)',
//     marginTop: 5,
//   },
//   gestureDemo: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gestureDemoTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   interactiveBox: {
//     width: 150,
//     height: 150,
//     backgroundColor: '#4CAF50',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   boxText: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     backgroundColor: '#E0E0E0',
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     marginTop: 50,
//   },
//   avatarText: {
//     fontSize: 48,
//   },
// });

// export default App;



// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home Screen</Text>

//       {/* <Button
//         title="Toggle Drawer"
//         onPress={() => navigation.toggleDrawer()}
//       /> */}
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Settings Screen</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     //<NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Settings" component={SettingsScreen} />
//       </Drawer.Navigator>
//     //</NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 22,x
//     marginBottom: 20,
//   },
// });


import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Property/Home';
import Payment from '../Property/Payment';
import CD from '../Property/CD';
import Chat from '../Property/Chat';
import Store from '../Property/Store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import WarehouseIcon from '../constants/assets/Warehouse.svg'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Custom Drawer Content Component
const CustomDrawerContent = (props) => {
  const menuItems = [
    { label: 'Find Property', icon: 'search', onPress: () => console.log('Find Property') },
    { label: 'Referral & Earn', icon: 'gift', onPress: () => console.log('Referral & Earn') },
    { label: 'Rate & Reviews', icon: 'star', onPress: () => console.log('Rate & Reviews') },
    { label: 'Contact Us', icon: 'call', onPress: () => console.log('Contact Us') },
    { label: 'Privacy Policy', icon: 'shield-checkmark', onPress: () => console.log('Privacy Policy') },
    { label: 'Terms & Conditions', icon: 'document-text', onPress: () => console.log('Terms & Conditions') },
    { label: 'About us', icon: 'information-circle', onPress: () => console.log('About us') },
    { label: 'FAQ', icon: 'help-circle', onPress: () => console.log('FAQ') },
    { label: 'Help', icon: 'help-buoy', onPress: () => console.log('Help') },
  ];

  return (
    <View style={styles.drawerContainer}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileInfo}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/60' }} // Replace with actual profile image
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Daniela Chikitani</Text>
            <Text style={styles.profileEmail}>daniela@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.viewProfileButton}>
          <Text style={styles.viewProfileText}>View Profile</Text>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons name={item.icon} size={20} color="#333" />
              <Text style={styles.menuItemText}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#666" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const Property = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch(route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline'
              return <Ionicons name={iconName} size={size} color={color} />
            
            case 'Payment':
              iconName = focused ? 'wallet' : 'wallet-outline'
              return <Ionicons name={iconName} size={size} color={color} />
            
            case 'C/D':
              return (
                <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
                  <WarehouseIcon width={size} height={size} fill={color} />
                </View>
              );
            
            case 'Chat':
              iconName = focused ? 'chatbox' : 'chatbox-outline'
              return <Ionicons name={iconName} size={size} color={color} />
            
            case 'Store':
              // Fixed: Using correct Ionicons names for store/shop
              iconName = focused ? 'storefront' : 'storefront-outline'
              return <Ionicons name={iconName} size={size} color={color} />
            
            default:
              return null;
          }
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="C/D" component={CD} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Store" component={Store} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Drawer.Navigator 
      initialRouteName="MainTabs"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 300,
        },
      }}
    >
      <Drawer.Screen 
        name="MainTabs" 
        component={Property}
        options={{
          drawerLabel: 'Home',
          title: 'Property App'
        }}
      />
      {/* Add more drawer screens as needed */}
      {/* <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  viewProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  viewProfileText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  menuContainer: {
    flex: 1,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    fontWeight: '400',
  },
})



