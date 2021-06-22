import Home from './Containers/Home/Home';
import './App.css';
import Header from './Components/Header/Header';
import Desc from './Components/Desc/Desc';

function App() {
  return (
    <div className="App">
    <Header/>
    <Desc/>
    <Home/>
    </div>
  );
}

export default App;
