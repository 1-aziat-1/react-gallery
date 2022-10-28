import React, {useEffect, useState} from 'react';
import _ from './Auth.module.css';
import {urlAuth} from '../../../api/auth';
import {ReactComponent as LoginIcon} from '../../../img/login.svg';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import {API_URL} from '../../../api/const';

export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    console.log(token);
    if (!token) return;

    fetch(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, profile_image: iconImg}) => {
        const img = iconImg.small;
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={_.container}>
      {auth.name ? (
        <>
          <button>
            <img src={auth.img} title={auth.name} alt={`Аватар`} />
          </button>
          <Text>{auth.name}</Text>
        </>
        ) : (
          <Text className={_.authLink} As='a' href={urlAuth}>
            <LoginIcon className={_.svg}/>
          </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
