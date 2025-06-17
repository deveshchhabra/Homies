// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const LoginOtp = () => {
//   return (
//     <View>
//       <Text>LoginOtp</Text>
//        <Pressable onPress={()=>navigation.goBack()}>
//               <Text>
//               Back
//               </Text>
//               </Pressable>
//     </View>
//   )
// }

// export default LoginOtp

// const styles = StyleSheet.create({})

import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import WrapperComponent from './WrapperComponent';
const LoginOtp = () => {
  const navigation = useNavigation();

  return (
    <WrapperComponent>

    <View style={styles.container}>
      <Text>OtpScreen</Text>

<Pressable onPress={() => navigation.navigate('Verified')} style={styles.button}>
        <Text style={styles.buttonText}>→ </Text>
      </Pressable>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
    </WrapperComponent>

  );
};

export default LoginOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});
