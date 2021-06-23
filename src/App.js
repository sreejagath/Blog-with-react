import Home from './Containers/Home/Home';
import './App.css';
import Header from './Components/Header/Header';
import Desc from './Components/Desc/Desc';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Contact from './Containers/Contact Us/Contact';
import Post from './Containers/Post/Post';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Desc/>
    <Route path="/" exact component={Home}/>
    <Route path="/contact" component={Contact} />
    <Route path="/post" component={Post}/>
    </div>
    </Router>
  );
}

export default App;
