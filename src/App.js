import {getToken} from './api/token';
import Header from './components/Header';
import {useDispatch} from 'react-redux';
import {tokenUpdate} from './store/token/action';

function App() {
  const dispath = useDispatch();

  dispath(tokenUpdate(getToken()));

  return (
    <>
      <Header/>
    </>
  );
}

export default App;
