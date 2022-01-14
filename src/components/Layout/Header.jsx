import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <Link to="/" className={classes.title}>
          <h1>Foody</h1>
        </Link>
        <Link to="/meals">
          <HeaderCartButton onClick={props.onShowCart} />
        </Link>
      </header>
    </React.Fragment>
  )
}

export default Header
