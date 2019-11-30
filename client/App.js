import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './OrganismsComponents/List';

export default App = () => {
  return (
    <View style={styles.container}>
      <Text>Testy test from Eileen</Text>
      <List/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
