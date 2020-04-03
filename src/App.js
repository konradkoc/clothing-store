import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInSignUp from './pages/sign-in-up/SignInSignUp'
import {auth} from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component ={ShopPage}/>
          <Route exact path='/signin' component ={SignInSignUp}/>
        </Switch>

      </div>
    );
  }
}
export default App;
