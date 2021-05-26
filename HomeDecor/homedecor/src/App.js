import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import ListProducts from './Components/ListProducts';
import Details from './Components/Details'
import About from './Components/About'
import ShoppingCartList from './Components/ShoppingCartList';
import Login from './Components/Login'

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
        <Route exact path="/shoppingcart" component={ShoppingCartList}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
