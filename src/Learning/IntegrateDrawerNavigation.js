import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Dummy Screens
const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const ChatScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Chat Screen</Text>
  </View>
);

const CDScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>CD Screen</Text>
  </View>
);

const StoreScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Store Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen (Drawer)</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings Screen (Drawer)</Text>
  </View>
);

// Navigators
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Bottom Tabs
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Chat') iconName = 'chatbox-outline';
          else if (route.name === 'CD') iconName = 'disc-outline';
          else if (route.name === 'Store') iconName = 'storefront-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="CD" component={CDScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
    </Tab.Navigator>
  );
}

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainTabs">
        <Drawer.Screen name="MainTabs" component={BottomTabs} options={{ title: 'Home Tabs' }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}