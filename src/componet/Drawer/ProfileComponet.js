import { Pressable, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient colors={['#010101', '#484848']} style={styles.gradientBackground}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" style={{ margin: 10 }} />
        </Pressable>
      </LinearGradient>

      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../constants/assets/Image3.jpg')}
          style={styles.profileImage}
        />
        <Pressable style={styles.editIcon}>
          <Ionicons name="pencil" size={18} color="#555" />
        </Pressable>
      </View>

      {/* Profile Info Card */}
      <View style={styles.card}>
        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={18} color="#444" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Deniela Chikitiani</Text>
          </View>
          <Ionicons name="pencil" size={16} color="#666" />
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={18} color="#444" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Mobile Number</Text>
            <Text style={styles.value}>+463 634 6774</Text>
          </View>
          <Ionicons name="pencil" size={16} color="#666" />
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={18} color="#444" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>daniela@gmail.com</Text>
          </View>
          <Ionicons name="pencil" size={16} color="#666" />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradientBackground: {
    height: ScreenHeight * 0.21,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: -80, // moves image up to overlap header
  },
  profileImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#fff',
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: ScreenWidth / 2 - 100,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 16,
    marginTop: 40,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  value: {
    color: '#666',
    fontSize: 14,
    marginTop: 2,
  },
});
