import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import ListProducts from './Components/ListProducts';
import Details from './Components/Details'
import About from './Components/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/products" component={ListProducts}/>
        <Route exact path="/products/:id" component={Details}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
