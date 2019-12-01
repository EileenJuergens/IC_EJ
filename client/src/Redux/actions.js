export const getPosts = data => {
  return {
    type: 'GET_POSTS',
    data
  };
};

export const getLoading = data => {
  return {
    type: 'GET_LOADING',
    data
  };
};
