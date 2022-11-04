import _ from './Auth.module.css';
import {urlAuth} from '../../../api/auth';
import {ReactComponent as LoginIcon} from '../../../img/login.svg';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';
import {useState} from 'react';
import {tokenDelete} from '../../../store/token/action';
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from '../../../UI/Loader/Loader';

export const Auth = () => {
  const token = useSelector(state => state.token.token);
  const [auth, loading, clearAuth] = useAuth();
  const [showLogout, setShowLogout] = useState(false);
  const dispath = useDispatch();

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispath(tokenDelete(token));
    clearAuth();
  };

  return (
    <div className={_.container}>
      {loading ? (
        <Loader color={30}/>
        ) : auth.name ? (
        <>
          <button className={_.btn} onClick={getOut}>
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


