import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Verified from '../Verified';

const Camera = () => {
  return (
    <View>
      <Text>Camera</Text>
    </View>
  )
}
const ChatReq = () => {
  return (
    <View>
      <Text>Chat</Text>
    </View>
  )
}
const Call = () => {
  return (
    <View>
      <Text>Call</Text>
    </View>
  )
}

const Status = () => {
  return (
    <View>
      <Text>Status</Text>
    </View>
  )
}
const Tab = createMaterialTopTabNavigator();

const Chat = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          height:4,
        },
        tabBarStyle:{
          backgroundColor:"#075e54",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
          textTransform: 'uppercase',
        },
        tabBarItemStyle: {
          paddingVertical: 12,
        },
      }}

    >
      <Tab.Screen
        name='CAMERA'
        component={Camera}
        options={{
          // tabBarScrollEnabled:true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
          
            <Ionicons
              name={focused ? 'camera' : 'camera-outline'} // Ionicons camera icon
              size={24}
              color="white"
            />
          ),
        }}
      />

      <Tab.Screen
        name="ChatReq"
        component={ChatReq}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: 'white', fontWeight: focused ? 'bold' : 'normal' }}>
              CHAT
            </Text>
          ),

          tabBarPressOpacity: 0.5,
          tabBarBadge: () => (
            <View style={{
              backgroundColor: 'white',
              borderRadius: 14,
              paddingHorizontal: 6,
              paddingVertical: 3,
              marginLeft: 1,
              marginVertical: 15
            }}>
              <Text style={{ color: '#075e54', fontSize: 12 }}>
                3
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen name="Status" component={Status}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <View style={styles.tabLabelContainer}>
            <View>
            <Text style={{ color: 'white', fontWeight: focused ? 'bold' : 'normal' }}>
              STATUS
            </Text>
            </View>
            <View><Text style={{color:'white',fontSize: 24}}>・</Text></View>
            </View>
          ),
         
        }} />

      <Tab.Screen name="Call" component={Call}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: 'white', fontWeight: focused ? 'bold' : 'normal' }}>
              CALLS
            </Text>
          )
        }} />





    </Tab.Navigator>
  )
}

export default Chat

const styles = StyleSheet.create({
  tabLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  statusBadge:{
 backgroundColor: 'white',
    borderRadius: 4,
    width: 5,
    height: 5,
    margin: 3,
  margin:20,
    // alignContent:"center",
    alignItems:'center'
    
}})



