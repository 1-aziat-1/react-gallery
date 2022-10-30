import _ from './Auth.module.css';
import {urlAuth} from '../../../api/auth';
import {ReactComponent as LoginIcon} from '../../../img/login.svg';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import {useAuth} from '../../../hooks/useAuth';
import {useState} from 'react';

export const Auth = ({token, delToken}) => {
  const [auth, clearAuth] = useAuth(token);
  const [showLogout, setShowLogout] = useState(false);
  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={_.container}>
      {auth.name ? (
        <>
          <button className={_.btn}  onClick={getOut}>
            <Text>{auth.name}</Text>
          </button>
          {showLogout && <button className={_.logout} onClick={logOut}>{'Выйти'}</button>}
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
  delToken: PropTypes.func,
};
