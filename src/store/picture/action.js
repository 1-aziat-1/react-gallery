import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ACCESS_KEY,
  API_URL
} from '../../api/const';

export const pictureRequestAsync = createAsyncThunk(
  'picture/axios',
  (id, {getState}) => axios(`${API_URL}/photos/${id}`, {
    params: {
      client_id: `${ACCESS_KEY}`,
      id: `${id}`,
    }
  })
    .then(({data}) => (data))
    .catch((error) => (error.toString()))
);
