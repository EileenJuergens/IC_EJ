const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return[...state].concat(action.data)
    default:
      return state;
  };
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'GET_LOADING':
      return action.data
    default:
      return state;
  };
};
    
export { postsReducer, loadingReducer }; 
