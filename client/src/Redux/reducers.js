const INITIAL_STATE = {
  isFetching: false,
  postsList: [],
  error: ''
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return [...state].concat(action.data)
      default:
        return state;
  };
};
    
export { postsReducer }; 
