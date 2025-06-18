
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';


const { width: screenWidth } = Dimensions.get('window');

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
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: "#075e54",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
          textTransform: 'uppercase',
        },
        tabBarItemStyle: {
          paddingVertical: 12,
        },
        tabBarScrollEnabled: false, // Important: disable scrolling for fixed widths
      }}
      tabBar={(props) => {
        // Custom tab bar with specific widths
      
        const { state, descriptors, navigation } = props;
        console.log(state)
        console.log(descriptors)
        // console.log(navigation)
        return (
          <View style={styles.customTabBar}>
            {state.routes.map((route, index) => {
              console.log(route.key,"route.Key")
              const { options } = descriptors[route.key];
              // console.log("option",options)
              const label = options.tabBarLabelStyle;

              console.log(label+"label")
              console.log(options)
              console.log(descriptors
              )
              const isFocused = state.index === index;
              
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              // Define custom widths
              let tabWidth;
              if (route.name === 'CAMERA') {
                tabWidth = screenWidth * 0.15; // 10%
              } else {
                tabWidth = screenWidth * 0.3; // 30% each
              }

              return (
                <View
                  key={route.key}
                  style={[styles.customTab, { width: tabWidth }]}
                >
                  <Text
                    onPress={onPress}
                    style={[
                      styles.customTabText,
                      { fontWeight: isFocused ? 'bold' : 'normal' }
                    ]}
                  >
                    {/* Render camera icon for camera tab */}
                    {route.name === 'CAMERA' ? (
                      <Ionicons
                        name={isFocused ? 'camera' : 'camera-outline'}
                        size={24}
                        color="white"
                      />
                    ) : route.name === 'ChatReq' ? (
                      <View style={styles.chatTabContainer}>
                        <Text style={[styles.customTabText, { fontWeight: isFocused ? 'bold' : 'normal' }]}>
                          CHAT
                        </Text>
                        <View style={styles.chatBadge}>
                          <Text style={styles.badgeText}>3</Text>
                        </View>
                      </View>
                    ) : route.name === 'Status' ? (
                      <View style={styles.statusTabContainer}>
                        <Text style={[styles.customTabText, { fontWeight: isFocused ? 'bold' : 'normal' }]}>
                          STATUS
                        </Text>
                        <Text style={styles.statusDot}>・</Text>
                      </View>
                    ) : (
                      <Text style={[styles.customTabText, { fontWeight: isFocused ? 'bold' : 'normal' }]}>
                        CALLS
                      </Text>
                    )}
                  </Text>
                  {/* Tab indicator */}
                  {isFocused && <View style={styles.tabIndicator} />}
                </View>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name='CAMERA'
        component={Camera}
        options={{
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="ChatReq"
        component={ChatReq}
      />

      <Tab.Screen 
        name="Status" 
        component={Status}
      />

      <Tab.Screen 
        name="Call" 
        component={Call}
      />
    </Tab.Navigator>
  )
}

export default Chat

const styles = StyleSheet.create({
  customTabBar: {
    flexDirection: 'row',
    backgroundColor: '#075e54',
    height: 48,
    alignItems: 'center',
  },
  customTab: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  customTabText: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: 'white',
  },
  chatTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatBadge: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
    minWidth: 20,
    alignItems: 'center',
  },
  badgeText: {
    color: '#075e54',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statusTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusDot: {
    color: 'white',
    fontSize: 24,
    marginLeft: 4,
  },
  tabLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


