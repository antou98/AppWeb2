import './App.css';
import Greeting from './components/Greeting';
import LoginControl from './components/LoginControl';

function App() {
  return (
    <div className="App">
    {/*   <Greeting isLoggedIn={true} /> */}
      <LoginControl />
    </div>
  );
}

export default App;

