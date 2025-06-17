import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Animated,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You'll need to install this

const Tab = createBottomTabNavigator();

// Screen Components
function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>Using TouchableOpacity tab button</Text>
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.subtitle}>Using styled TouchableOpacity</Text>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text style={styles.subtitle}>Using completely custom button</Text>
    </SafeAreaView>
  );
}

function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Notifications Screen</Text>
      <Text style={styles.subtitle}>Using animated button</Text>
    </SafeAreaView>
  );
}

// Custom Tab Button Components

// 1. Simple TouchableOpacity replacement
const TouchableTabButton = (props) => {
  return <TouchableOpacity {...props} />;
};

// 2. Styled TouchableOpacity
const StyledTabButton = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        props.style,
        {
          backgroundColor: props.accessibilityState?.selected ? '#007AFF' : 'transparent',
          borderRadius: 8,
          marginHorizontal: 5,
        },
      ]}
    />
  );
};

// 3. Completely custom button
const CustomTabButton = (props) => {
  const isSelected = props.accessibilityState?.selected;
  
  return (
    <View style={styles.customButtonContainer}>
      <TouchableOpacity
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        style={[
          styles.customButton,
          {
            backgroundColor: isSelected ? '#FF6B6B' : '#F0F0F0',
            transform: [{ scale: isSelected ? 1.1 : 1 }],
          },
        ]}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

// 4. Animated button
const AnimatedTabButton = (props) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;
  const isSelected = props.accessibilityState?.selected;
  
  React.useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: isSelected ? 1.2 : 1,
      useNativeDriver: true,
      tension: 300,
      friction: 10,
    }).start();
  }, [isSelected]);
  
  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
      tension: 300,
      friction: 10,
    }).start();
  };
  
  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: isSelected ? 1.2 : 1,
      useNativeDriver: true,
      tension: 300,
      friction: 10,
    }).start();
  };
  
  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <TouchableOpacity
        {...props}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          props.style,
          {
            backgroundColor: isSelected ? '#4ECDC4' : 'transparent',
            borderRadius: 12,
          },
        ]}
      />
    </Animated.View>
  );
};

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: {
            backgroundColor: '#F8F8F8',
            paddingBottom: 10,
            height: 80,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" size={size} color={color} />
            ),
            // Using TouchableOpacity instead of default Pressable
            tabBarButton: TouchableTabButton,
          }}
        />
        
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" size={size} color={color} />
            ),
            // Using styled TouchableOpacity
            tabBarButton: StyledTabButton,
          }}
        />
        
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings-outline" size={size} color={color} />
            ),
            // Using completely custom button
            tabBarButton: CustomTabButton,
          }}
        />
        
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications-outline" size={size} color={color} />
            ),
            // Using animated button
            tabBarButton: AnimatedTabButton,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  customButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
});

// Package.json dependencies you'll need:
/*
{
  "dependencies": {
    "@react-navigation/native": "^6.x.x",
    "@react-navigation/bottom-tabs": "^6.x.x",
    "react-native-screens": "^3.x.x",
    "react-native-safe-area-context": "^4.x.x",
    "react-native-vector-icons": "^10.x.x"
  }
}
*/

// Installation commands:
/*
npm install @react-navigation/native @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install react-native-vector-icons

// For iOS (if using React Native CLI):
cd ios && pod install

// Don't forget to configure vector icons for your platform
*/