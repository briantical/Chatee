import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  const handleMoreOptions = () => {};

  const handleSearch = () => {};

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>WhatsApp</Text>

      <View style={styles.iconsContainer}>
        <Icon name="search" style={styles.icons} onPress={handleSearch} />

        <Icon
          name="more-vert"
          style={[styles.icons]}
          onPress={handleMoreOptions}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#202C33',
    justifyContent: 'space-between',
  },
  headerTitle: {
    flex: 1,
    fontSize: 25,
    color: '#888D90',
    fontWeight: 'bold',
  },
  iconsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icons: {
    fontSize: 25,
    marginLeft: 15,
    color: '#888D90',
  },
});

export default Header;
