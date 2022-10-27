import React from 'react';
import _ from './Auth.module.css';
import {urlAuth} from '../../../api/auth';
import {ReactComponent as LoginIcon} from '../../../img/login.svg';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';

export const Auth = ({auth}) => {
  console.log();
  return (
    <div className={_.container}>
      {auth ? (
        auth
        ) : (
          <Text className={_.authLink} As='a' href={urlAuth}>
            <LoginIcon className={_.svg}/>
          </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  auth: PropTypes.bool,
};
