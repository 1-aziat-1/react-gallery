import axios from 'axios';
import {
  API_URL,
  ACCESS_KEY,
} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export const POSTS_REQUEST_SUCCESS_PAGE = 'POSTS_REQUEST_SUCCESS_PAGE';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const UPDATE_POSTS = 'UPDATE_POSTS';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  posts: data,
}
);

export const postsRequestSuccessPage = (data) => ({
  type: POSTS_REQUEST_SUCCESS_PAGE,
  posts: data,
}
);

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const updatePosts = () => ({
  type: UPDATE_POSTS,
});

export const postsRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().posts.page;
  if (page !== newPage) {
    page = newPage;
    dispatch(changePage(page));
  }
  const loading = getState().posts.loading;
  if (loading) return;
  dispatch(postsRequest());
  // eslint-disable-next-line max-len
  axios(`${API_URL}/photos?client_id=${ACCESS_KEY}&${page ? `page=${page}` : ''}&per_page=30&order_by=latest`)
    .then(({data}) => {
      if (page > 1) {
        dispatch(postsRequestSuccessPage(data));
      } else {
        dispatch(postsRequestSuccess(data));
      }
    })
    .catch((error) => {
      console.error(error);
      dispatch(postsRequestError(error));
    });
};
