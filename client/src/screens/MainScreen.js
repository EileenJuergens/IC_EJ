import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getPostsService } from '../Services/APIclient';
import { getPosts, getLoading } from '../Redux/actions';
import LottieView from 'lottie-react-native';
import List from '../components/List';

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
    if (loadingStatus) {
      return <LottieView source={require('../../assets/loader.json')} autoPlay loop/>
    }
    return (
      <View>
        <List postsList={postsList}/>
      </View>
    );
  }

  return displayContent();
};

const mapStateToProps = state => ({
  postsList: state.postsReducer,
  loadingStatus: state.loadingReducer
});

const mapDispatchToProps = dispatch => ({
  dispatchGetPosts: data => dispatch(getPosts(data)),
  dispatchGetLoading: data => dispatch(getLoading(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
