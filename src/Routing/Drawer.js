

import { StyleSheet, View, Text, Pressable, Image, FlatList } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTab from "./BottomTab"
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';


import { menuItems } from '../constants/constants';
import RenderItem from './RenderItem';


const CustomDrawerContent = ({ navigation }) => {
   const navigation1 = useNavigation();

  const navigateToOther = (val) => {
    navigation.navigate(val)
  }
  { console.log(menuItems) }
  return (
    <View style={styles.drawerContent}>
      <View style={styles.box}>

        <Image
          source={require('../constants/assets/Image3.jpg')}
          style={{
            width: 70,
            height: 70,
            borderRadius: 60
          }}
        />

        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Daniela Chikitani</Text>
          <Text style={{ fontSize: 15, color: '#666', marginLeft: 10 }}>Daniela@gmail.com</Text>
          <Pressable onPress={() => navigation1.navigate('Profile')} style={{flexDirection:'row'}} >


            <Text style={{ fontSize: 15, 
            paddingHorizontal: 11,
           
            marginTop:15,
            
            fontFamily:'Poppins' }}>View Profile </Text><Text style={{ fontSize:25,marginTop:10}}>→</Text>
         </Pressable>
        </View>

      </View>


      {/* <FlatList
        data={menuItems}
        // renderItem={({item})=>{
        //   return  (
        //     <>
        //      <Pressable style={styles.section}  onPress={()=>navigation1.navigate(item.name)}   >

        //           <Text>{item.label}</Text>
        //           <Ionicons name="chevron-forward" size={16} color="#999" />

        //         </Pressable>
        //             <View style={{borderWidth:1,borderColor:'#D9D9D9',marginHorizontal:10}}/>
        //   </>
        //   )

        // }}
        renderItem={(item) => <RenderItem item={item} functin={navigateToOther} />}
      ></FlatList> */}


      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RenderItem item={item} navigateToOther={(screenName) => navigation.navigate(screenName)} />
        )}
      />


    </View>
  )
}
const Drawer = createDrawerNavigator();
const Drawering = () => {


  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'front',
        drawerStatusBarAnimation: "slide"
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='MainTabs' component={BottomTab}
        options={{ drawerLabel: () => null }}
      />

    </Drawer.Navigator>
  )
}

export default Drawering

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    padding:9,

  },
  box: {

    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  line: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black;'
  },
  section: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 40,
    justifyContent: 'space-between'
  }
})


