import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WrapperComponent from '../componet/WrapperComponent';
// Props: item (object with 'label' and 'name'), navigateToOther (function)
const RenderItem = ({ item, navigateToOther }) => {
  const handlePress = () => {
    if (navigateToOther && item?.name) {
      navigateToOther(item.name);
    }
  };

  return (
 <WrapperComponent>
      <Pressable style={styles.section} onPress={handlePress}>
        <Text style={styles.labelText}>{item?.label}</Text>
        <Ionicons name="chevron-forward" size={16} color="#999"  style={{ fontWeight: 'bold' }} />
      </Pressable>
      <View style={styles.separator} />
  </WrapperComponent>
  );
};

export default RenderItem;

// Optional styles for consistency
const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  labelText: {
    fontSize: 16,
    color: '#333',
    fontWeight:'bold'
  },
  separator: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: 10,
  },
});
