import React from 'react';
import { View, Text, Image } from 'react-native';

const ListItem = ({thumbnail, date, title, author, score, comment})  => {
  const formatDate = () => {
    const currentDate = new Date();
    const created = new Date(currentDate.getTime() - date);
    return created.toDateString();
  }

  return (
    <View>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: thumbnail}}
      />
      <Text>{formatDate()}</Text>
      <Text>{title}</Text>
      <Text>{author}</Text>
      <Text>{score}</Text>
      <Text>{comment}</Text>
    </View>
  );
};

export default ListItem;
