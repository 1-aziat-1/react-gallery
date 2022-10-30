import {useEffect, useState} from 'react';
import {API_URL} from '../api/const';

export const useAuth = (token) => {
  const [auth, setAuth] = useState({});


  useEffect(() => {
    if (!token) return;

    fetch(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name}) => {
        setAuth({name});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
