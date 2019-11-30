import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import List from '../OrganismsComponents/List';

const MainScreen = ()  => {
  return (
    <View>
      <Text style={styles.textStyle}>Test from Main</Text>
      <List/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
});

export default MainScreen;
