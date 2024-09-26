import { NavLink } from 'react-router-dom'

import logo from '../assets/Generations.png'
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <img className={classes.logo} src={logo}/>
        <span className={classes.nav_links}>         
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='services'>Services</NavLink></li>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink to='contact'>Contact Us</NavLink></li>
          </ul>
        </span>
      </nav>
    </header>
  )
}