import Header from './components/Header';
import {useToken} from './hooks/useToken';

function App() {
  const [token, delToken] = useToken('');

  return (
    <div className="_.container">
      <Header token={token} delToken={delToken}/>
    </div>
  );
}

export default App;
