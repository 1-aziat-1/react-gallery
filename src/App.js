import {useEffect} from 'react';
import Header from './components/Header';
import {URL} from './api/const';
import {useToken} from './hooks/useToken';

function App() {
  const [token] = useToken('');
  console.log(token);
  // useEffect(() => {
  //   if (!token) return;

  //   fetch(`${URL}/me`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // }, [token]);

  return (
    <div className="_.container">
      <Header />
    </div>
  );
}

export default App;
