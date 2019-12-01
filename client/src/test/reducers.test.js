import { postsReducer, loadingReducer } from '../Redux/reducers';

describe('postsReducer', () => {
  it('should return the initial state', () => {
    expect(postsReducer(undefined, {})).toEqual([])
  });
  
  it('should handle GET_POSTS', () => {
    const data =  {title: "title 1"}
    const postsList = [
      {title: "title 1"}
    ]
    expect(postsReducer([], {type: 'GET_POSTS', data})).toEqual(postsList);
  });
});

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    expect(loadingReducer(undefined, {})).toEqual(false)
  });

  it('should handle GET_LOADING', () => {
    const data = false;
    const loadingStatus = false;
    expect(loadingReducer(0, {type: 'GET_LOADING', data})).toEqual(loadingStatus);
  });
})
