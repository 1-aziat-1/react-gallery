import axios from 'axios';
import {
  API_URL,
  ACCESS_KEY,
} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  posts: data,
}
);

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  dispatch(postsRequest());
  axios(`${API_URL}/photos`, {
    params: {
      client_id: ACCESS_KEY,
      page: 1,
      order_by: 'latest',
    }
  })
    .then(({data}) => {
      dispatch(postsRequestSuccess(data));
    })
    .catch((error) => {
      console.error(error);
      dispatch(postsRequestError(error));
    });
};
