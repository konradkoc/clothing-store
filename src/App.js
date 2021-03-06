import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';
import { createStructuredSelector } from 'reselect'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInSignUp from './pages/sign-in-up/SignInSignUp'
import CheckoutPage from './pages/checkout/CheckoutPage'

import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount() {

    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component ={ShopPage}/>
          <Route exact path='/checkout' component ={CheckoutPage}/>
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : <SignInSignUp/>}/>
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchtoProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(mapStateToProps, mapDispatchtoProps)(App);
