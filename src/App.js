import {getToken} from './api/token';
import {useDispatch} from 'react-redux';
import {tokenUpdate} from './store/token/action';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const dispath = useDispatch();

  dispath(tokenUpdate(getToken()));

  return (
    <>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
