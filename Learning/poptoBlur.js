import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Individual Screen Components
function HomeListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Home List</Text>
      <Text style={styles.subtitle}>This is the root of Home tab</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeDetails', { id: 1 })}
      >
        <Text style={styles.buttonText}>Go to Home Details</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function HomeDetailsScreen({ navigation, route }) {
  const { id } = route.params;
  
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Home Details {id}</Text>
      <Text style={styles.subtitle}>Nested screen in Home stack</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeSubDetails', { id: 2 })}
      >
        <Text style={styles.buttonText}>Go Deeper (Sub Details)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function HomeSubDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Home Sub Details</Text>
      <Text style={styles.subtitle}>Deep nested screen in Home stack</Text>
      <Text style={styles.description}>
        Switch to Profile tab and back to see popToTopOnBlur in action!
      </Text>
      
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function ProfileListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Profile List</Text>
      <Text style={styles.subtitle}>This is the root of Profile tab</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProfileDetails', { userId: 123 })}
      >
        <Text style={styles.buttonText}>Go to Profile Details</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function ProfileDetailsScreen({ navigation, route }) {
  const { userId } = route.params;
  
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Profile Details</Text>
      <Text style={styles.subtitle}>User ID: {userId}</Text>
      <Text style={styles.description}>
        This tab does NOT have popToTopOnBlur enabled.
        Navigate away and back - you'll stay on this screen.
      </Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProfileSettings')}
      >
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function ProfileSettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Profile Settings</Text>
      <Text style={styles.subtitle}>Deep nested screen</Text>
      
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function SearchScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Search</Text>
      <Text style={styles.subtitle}>Simple screen with no nested navigation</Text>
    </SafeAreaView>
  );
}

// Stack Navigators for each tab
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeList" 
        component={HomeListScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="HomeDetails" 
        component={HomeDetailsScreen}
        options={{ title: 'Details' }}
      />
      <Stack.Screen 
        name="HomeSubDetails" 
        component={HomeSubDetailsScreen}
        options={{ title: 'Sub Details' }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProfileList" 
        component={ProfileListScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen 
        name="ProfileDetails" 
        component={ProfileDetailsScreen}
        options={{ title: 'Profile Details' }}
      />
      <Stack.Screen 
        name="ProfileSettings" 
        component={ProfileSettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        headerShown: false, // We're using stack navigator headers instead
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
          // KEY FEATURE: popToTopOnBlur = true
          // When you navigate away from this tab and come back,
          // it will automatically pop to the root screen (HomeList)
          popToTopOnBlur: true,
        }}
      />
      
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
          // popToTopOnBlur = false (default)
          // When you navigate away and come back,
          // it will stay on whatever screen you were on
          popToTopOnBlur: false,
        }}
      />
      
      <Tab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search-outline" size={size} color={color} />
          ),
          // No nested stack, so popToTopOnBlur has no effect
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 200,
  },
  secondaryButton: {
    backgroundColor: '#FF6B6B',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

/*
HOW TO TEST popToTopOnBlur:

1. Go to Home tab
2. Navigate: Home List → Home Details → Home Sub Details
3. Switch to Profile tab
4. Switch back to Home tab
5. RESULT: You'll be back at Home List (root screen)

6. Go to Profile tab  
7. Navigate: Profile List → Profile Details → Profile Settings
8. Switch to Search tab
9. Switch back to Profile tab
10. RESULT: You'll still be on Profile Settings (stays where you left off)

This demonstrates the difference between popToTopOnBlur: true vs false
*/