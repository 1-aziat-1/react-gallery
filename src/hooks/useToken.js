import {useState, useEffect} from 'react';
import {useCodeKey} from './useCodeKey';
import {
  URL_TOKEN,
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
} from '../api/const';

export const useToken = (state) => {
  const [token, setToken] = useState(state);
  const [codeKey] = useCodeKey('');
  let searchParams;

  useEffect(() => {
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
  }, []);

  useEffect(() => {
    if (!codeKey) return;

    searchParams = new URLSearchParams('');
    searchParams.append('client_id', ACCESS_KEY);
    searchParams.append('client_secret', SECRET_KEY);
    searchParams.append('redirect_uri', REDIRECT_URI);
    searchParams.append('code', codeKey);
    searchParams.append('grant_type', 'authorization_code');

    const urlBody = searchParams.toString();

    if (!token) {
      fetch(`${URL_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlBody,
      })
        .then((response) => response.json())
        .then(({access_token: accessToken}) => {
          setToken(accessToken);
        })
        .catch(err => {
          console.error(err);
          setToken('');
        });
    }
  }, [codeKey]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  return [token];
};
