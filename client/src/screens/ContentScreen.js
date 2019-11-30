import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContentScreen = ()  => {
  return (
    <View>
      <Text style={styles.textStyle}>Test from Contant</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
});

export default ContentScreen;
