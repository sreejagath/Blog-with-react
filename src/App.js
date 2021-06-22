import Home from './Containers/Home/Home';
import './App.css';
import Header from './Components/Header/Header';
import Desc from './Components/Desc/Desc';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Desc/>
    <Route path="/" component={Home}/>
    
    </div>
    </Router>
  );
}

export default App;
