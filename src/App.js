import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProducList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart';
import Default from './components/Default';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ ProducList } />
        <Route path="/details" component={ Details } />
        <Route path="/cart" component={ Cart } />
        <Route component={ Default } />
      </Switch>
     <Modal /> 
    </React.Fragment>
  );
}

export default App;
