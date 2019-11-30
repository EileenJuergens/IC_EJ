import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';


const List = ()  => {

  const testData = {
    data: {
      children: [
        {
          data: {
              title: "Post 1",
              score: 3,
              thumbnail: "https://b.thumbs.redditmedia.com/3BOB_FIkG_1W7lwkFCsDrb-kZpRcC5q0y70sAwZLZjM.jpg",
              created: 1575156041,
              author: "Author 1",
              permalink: "/r/pics/comments/e3xxiy/xray_when_you_still_have_manicure/",
              url: "https://i.imgur.com/xhE2LLb.jpg"
          }
        },
        {
          data: {
            title: "Post 2",
            score: 23,
            thumbnail: "https://b.thumbs.redditmedia.com/3BOB_FIkG_1W7lwkFCsDrb-kZpRcC5q0y70sAwZLZjM.jpg",
            created: 1575156041,
            author: "Author 2",
            permalink: "/r/pics/comments/e3xxiy/xray_when_you_still_have_manicure/",
            url: "https://i.imgur.com/xhE2LLb.jpg"
          }
        }
      ]   
    }
  }

  const children = [
    { title: "Post 1" },
    { title: "Post 2" },
    { title: "Post 3" }  
  ];
  
  testHandler = () => {
    console.log("test sucessfull");	
  }
 
  return (
    <View>
      <Button 
      title = 'Test-Btn' 
      onPress = {testHandler}
      />
      <FlatList
        keyExtractor={item => item.title} 
        data={children} 
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  );
};

export default List;
