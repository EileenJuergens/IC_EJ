import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = ({ thumbnail, date, title, author, score, comments })  => {
  const formatDate = () => {
    const currentDate = new Date();
    const created = new Date(currentDate.getTime() - date);
    return created.toDateString();
  }

  return (
    <View style={styles.columnStyle}>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: thumbnail}}
      />
      <View style={styles.rowStyle}>
        <Text style={styles.dateStyle}>{formatDate()}</Text>
        <Text>{title}</Text>
        <View style={styles.lastColumnStyle} >
          <Text>{author}</Text>
          <Text>{score}</Text>
          <Text>{comments}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  columnStyle: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10
  },
  dateStyle: {
    justifyContent: 'flex-end'
  },
  lastColumnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});

export default ListItem;
