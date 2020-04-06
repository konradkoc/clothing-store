import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import './header.style.css'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import { connect } from 'react-redux'

import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

import { createStructuredSelector} from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'


const Header = ( {currentUser, hidden} ) => (
    <div className='header'>
        <Link className ='logo-container' to = '/'>
             <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className = 'option' onClick = {()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link to='/signin' className ='option'>SIGN IN</Link>
            }

            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}   
    </div>
)

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStatetoProps)(Header)