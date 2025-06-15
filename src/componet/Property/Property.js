import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Payment from './Payment';
import CD from './CD';
import Chat from './Chat';
import Store from './Store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import WarehouseIcon from '../../constants/assets/Warehouse.svg'
const Tab = createBottomTabNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer'
const Property = () => {
  return (
    
    <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon:({focused,color,size})=>{
        let iconName;

        switch(route.name){
          case 'Home':
            iconName=focused?'home':'home-outline'
            return <Ionicons name={iconName} size={size} color={color} />
            case 'Payment':
              iconName=focused?'wallet':'wallet-outline'
              return  <Ionicons name={iconName} size={size} color={color}/>
             case 'C/D':
               return (
                <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
                  <WarehouseIcon width={size} height={size} fill={color} />
                </View>
              );
            
              case 'Chat':
                iconName=focused?'chatbox':'chatbox-outline'
                return <Ionicons name={iconName} size={size} color={color}/>
                case 'Store':
                  iconName=focused?'bag-handle':'bag-handle-outline'
                  return <Ionicons name={iconName} size={size} color={color}/>
        
          }

        
    }
    
  })}
>

      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Payment" component={Payment}/>
      <Tab.Screen name="C/D" component={CD}/>
      <Tab.Screen name="Chat" component={Chat}/>
      <Tab.Screen name="Store" component={Store}/>
    </Tab.Navigator>
  )
}

export default  Property
const Drawer = createDrawerNavigator();






