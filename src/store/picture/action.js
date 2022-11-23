import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ACCESS_KEY,
  API_URL
} from '../../api/const';

export const pictureRequestAsync = createAsyncThunk(
  'picture/axios',
  (id, {getState}) => {
    const token = getState().token.token;
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return axios(`${API_URL}/photos/${id}?client_id=${ACCESS_KEY}`, {headers}
    )
      .then(({data}) => {
        const likes = data.likes;
        const isLikes = data.liked_by_user;
        return { data, likes, isLikes };
      })
      .catch((error) => (error.toString()));
  });
