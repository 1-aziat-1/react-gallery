/* eslint-disable max-len */
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  API_URL,
  ACCESS_KEY,
} from '../../api/const';


export const postsRequestAsync = createAsyncThunk('posts/axios', (_, { getState }) => {
  const posts = getState().posts.posts;
  const page = getState().posts.page;
  const token = getState().token.token;
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios(`${API_URL}/photos?client_id=${ACCESS_KEY}&${page ? `page=${page}` : ''}&per_page=30`, {headers})
    .then(data => {
      let newPosts = data.data;
      if (page > 1) {
        newPosts = [...posts, ...newPosts];
      }
      return newPosts;
    })
    .catch(error => ({ error: error.toString() }));
});
