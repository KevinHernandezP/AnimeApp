import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Toolbar from './Toolbar/Toolbar';
import Home from './Home/Home';


function App() {
  return (
    <div className="App">
      
      <Toolbar></Toolbar>
      <Home></Home>

    </div>
  );
}

export default App;
