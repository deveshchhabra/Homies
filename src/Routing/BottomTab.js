import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../componet/Property/Home'; 
import Payment from '../componet/Property/Payment';
import CD from '../componet/Property/CD';
import Chat from '../componet/Property/Chat';
import Store from '../componet/Property/Store';
// import WarehouseIcon from '../constants/assets/Warehouse.svg';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          case 'Payment':
            iconName = focused ? 'wallet' : 'wallet-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          // case 'CD':
          //   return (
          //     <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
          //       <WarehouseIcon width={size} height={size} fill={color} />
          //     </View>
          //   );
          case 'Chat':
            iconName = focused ? 'chatbox' : 'chatbox-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          case 'Store':
            iconName = focused ? 'bag-handle' : 'bag-handle-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
        }
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Payment" component={Payment} />
    <Tab.Screen 
    name="CD"
     component={CD}  
    options={{
        title:"C/D"
    }}/>
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Store" component={Store} />
  </Tab.Navigator>
);

// Property component = Drawer + Tabs inside

export default MainTabs;

const styles = StyleSheet.create({
  // Add styles if needed
});
