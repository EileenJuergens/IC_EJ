import * as actions from '../Redux/actions';

describe('actions', () => {
  it('should create an action to get all posts', () => {
    const data = {
      thumbnail: 'https://b.thumbs.redditmedia.com/test.jpg',
      date: '1575174234',
      title: 'Test title',
      author: 'Eileen Juergens',
      score: 333,
      comments: 123
    };
    const expectedAction = {
      type: 'GET_POSTS',
      data
    };
    expect(actions.getPosts(data)).toEqual(expectedAction);
  });

  it('should create an action to get loading status', () => {
    const data = false;
    const expectedAction = {
      type: 'GET_LOADING',
      data
    };
    expect(actions.loadingReducer(data)).toEqual(expectedAction);
  });
});
