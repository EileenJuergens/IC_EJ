const BASE_URL = 'https://api.reddit.com/r/pics';

const getPostsService = async () => {
  const response = await fetch(BASE_URL);
  if (response.ok) {
    const parsedResp = await response.json();
    return parsedResp;
  }
  throw new Error('Sorry, something went wrong with the request.');
};

export  { getPostsService };
