import axios from 'axios';
import {API_URL} from './const';


export const likeUpdate = (id, token, method) => {
  const url = new URL(`${API_URL}/photos/${id}/like`);
  if (!token) return;

  axios(url.href, {
    method,
    headers: { Authorization: `Bearer ${token}` },
  })
    .catch(error => ({ error: error.toString() }));
};
