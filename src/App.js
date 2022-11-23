import {getToken} from './api/token';
import {useDispatch} from 'react-redux';
import {tokenUpdate} from './store/token/action';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispath = useDispatch();

  dispath(tokenUpdate(getToken()));

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header/>
          <Main/>
        </>
      }/>
    </Routes>
  );
}

export default App;
