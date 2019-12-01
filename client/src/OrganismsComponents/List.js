import React from 'react';
import { View, FlatList } from 'react-native';
import ListItem from './MoleculesComponents/ListItem';

const List = ({ postsList })  => {
  
  return (
    <View>
      <FlatList
        data={postsList} 
        keyExtractor={item => item.data.id} 
        renderItem={({ item }) => {
          return <ListItem 
                    thumbnail={item.data.thumbnail} 
                    date={item.data.created_utc} 
                    title={item.data.title} 
                    author={item.data.author}
                    score={item.data.score}
                    comment={item.data.comment}/>
        }}
      />
    </View>
  );
};


export default List;
