// import { NavLink } from 'react-router-dom'

import classes from './Home.module.css'
import dining from '../assets/Dining.jpg'

export default function HomePage() {
  return (
    <>
      <section className={classes.highlight}>
        <div>
          <h2>Generations Remodeling</h2>
          <h3>Serving the Cleveland area with over 20 years of experience.<br/> We will create the dream space you have been looking for.</h3>
          <div className={classes.button_container}>
            <button>Get Started</button>
          </div>
        </div>
        <div>
          <img className={classes.sketch} src={dining}/>
        </div>
      </section>
      <section >
        <div>
          <h3>Our Services</h3>
        </div>
      </section>
    </>
  )
}