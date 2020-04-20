import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import './header.style.scss'
import { connect } from 'react-redux'

import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

import { createStructuredSelector} from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'


const Header = ( {currentUser, hidden} ) => (
    <Fragment>
        <nav className='options'>
        
            <Link className='option home' to='/'>
                HOME
            </Link>

            <Link className='option' to='/shop'>
                SHOP
            </Link>
           
            {
                currentUser ? 
                <div className = 'option' onClick = {()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link to='/signin' className ='option'>SIGN IN</Link>
            }

            <CartIcon />
        </nav>
        {hidden ? null : <CartDropdown />}   
    </Fragment>

)

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStatetoProps)(Header)