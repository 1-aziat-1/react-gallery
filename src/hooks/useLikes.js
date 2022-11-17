import axios from 'axios';
import { useState } from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {API_URL} from '../api/const';

export const useLikes = (likes, id) => {
  const token = useSelector(state => state.token.token);
  const [like, setLikes] = useState(likes);
  useEffect(() => {
    if (!token) return;

    axios
      .post(`${API_URL}/photos/${id}/like`,
        {
          id: `${id}`
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({data}) => {
        setLikes(data.photo.likes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return [like, setLikes];
};
