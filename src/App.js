import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component ={ShopPage}/>
    </div>
  );
}

export default App;
