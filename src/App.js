import Header from './components/Header';
import {useToken} from './hooks/useToken';

function App() {
  const [token] = useToken();

  return (
    <div className="_.container">
      <Header token={token}/>
    </div>
  );
}

export default App;
