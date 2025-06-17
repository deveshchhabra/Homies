import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Payment from './Payment';
import CD from './CD';
import Chat from './Chat';
import Store from './Store';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const menuItems = [
    'Find Property',
    'Referral & Earn',
    'Rate & Reviews',
    'Contact Us',
    'Privacy Policy',
    'Terms & Conditions',
    'About us',
    'FAQ',
    'Help',
  ];

  return (
    <View style={styles.drawerContent}>
      <View style={styles.profileSection}>
        <View style={styles.profileImage} />
        <Text style={styles.profileName}>Daniela Chikitani</Text>
        <Text style={styles.profileEmail}>daniela@gmail.com</Text>
        <TouchableOpacity style={styles.viewProfile}>
          <Text style={styles.viewProfileText}>View Profile</Text>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              navigation.closeDrawer();
            }}
          >
            <Text style={styles.menuText}>{item}</Text>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Property = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerType: 'slide',
        drawerPosition: 'left',
        drawerStyle: {
          backgroundColor: 'white',
          width: 280,
          shadowColor: '#000',
          shadowOffset: { width: 2, height: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        overlayColor: 'rgba(0, 0, 0, 0.3)',
        swipeEnabled: true,
        swipeEdgeWidth: 50,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="C/D" component={CD} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Store" component={Store} />
    </Drawer.Navigator>
  );
};

export default Property;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  profileSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  viewProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  viewProfileText: {
    fontSize: 14,
    color: '#666',
  },
  menuSection: {
    flex: 1,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0',
    backgroundColor: 'white',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
});

