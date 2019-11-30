import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './OrganismsComponents/List';


const App = () => {

  return (
    <View style={styles.container}>
      <Text>Title test</Text>
      {/* <Text>{postsList}</Text> */}
      <List/>
    </View>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
