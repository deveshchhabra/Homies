
import React from 'react';
import { StyleSheet,View} from 'react-native'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import MyMainStack from './src/Routing/MyMainStack';
// import './gesture-handler';
 
const App = () => {
 
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <NavigationContainer >
          <MyMainStack />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});

// HomeScreen
//    └── Login → OtpScreen → Verified
//                        ←        ←
//                  (navigate back)
// HomeScreen
//    └── CreateAccount → OtpScreen → Verified
//                               ←         ←
//                         (navigate back)

