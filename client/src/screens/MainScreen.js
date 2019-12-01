import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getPostsService } from '../Services/APIclient';
import { getPosts, getLoading } from '../Redux/actions';
import List from '../OrganismsComponents/List';

const MainScreen = ({ postsList, loadingStatus, dispatchGetPosts, dispatchGetLoading })  => {
  useEffect(() => {
    dispatchGetLoading(true)
    getPostsService()
      .then(response => {
        dispatchGetLoading(false)
        dispatchGetPosts(response.data.children)
      })
      .catch(() => {
        dispatchGetLoading(false)
      })
  }, []);

  const displayContent = () => {
    if (loadingStatus) return <Text>Loading...</Text>
    return (
      <View>
        <Text style={styles.textStyle}>Test from Main</Text>
        <List postsList={postsList}/>
      </View>
    );
  }

  return displayContent();
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
});

const mapStateToProps = state => ({
  postsList: state.postsReducer,
  loadingStatus: state.loadingReducer
});

const mapDispatchToProps = dispatch => ({
  dispatchGetPosts: data => dispatch(getPosts(data)),
  dispatchGetLoading: data => dispatch(getLoading(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
