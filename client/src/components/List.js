import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const List = ({ postsList })  => {
  
  return (
    <View>
      <FlatList
        style={styles.itemStyle}
        data={postsList} 
        keyExtractor={item => item.data.id} 
        renderItem={({ item }) => {
          return <ListItem 
                    thumbnail={item.data.thumbnail} 
                    date={item.data.created_utc} 
                    title={item.data.title} 
                    author={item.data.author}
                    score={item.data.score}
                    comments={item.data.num_comments}/>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    margin: 20
  }
});

export default List;
