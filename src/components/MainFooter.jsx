import { NavLink } from "react-router-dom"
import { pages } from "../pages"
import { services } from "../services"
import logo from '../assets/Generations.png'
import classes from './MainFooter.module.css'

export default function MainFooter() {

  const links = (
    <ul>
      {pages.map((page) => (
        <li key={page.id}>
          <NavLink to={page.link}>{page.name}</NavLink>
        </li>
      ))}
    </ul>
  )

  const homeServices = (
    <>
      <ul>
        {services.filter((service) => service.id < 5).map((service) => 
          <li key={service.id}>
            <NavLink to='/services'>{service.title}</NavLink>
          </li>
        )}
      </ul>
      <ul>
        {services.filter((service) => service.id > 4).map((service) => 
          <li key={service.id}>
            <NavLink to='/services'>{service.title}</NavLink>
          </li>
        )}
      </ul>
    </>
  )

  return (
    <footer>
      <span className={classes.container}>
        <div className={classes.logo}>
          <img src={logo}/>
        </div>
        <div className={classes.contact}>
          <p>(555)555-5555</p>
          <p>office@genhomeremodel.com</p>
          <p>5858 Cleveland Dr., Suite 1 Cleveland, OH, 44145</p>
        </div>
      </span>
      <span className={classes.links_container}>
        {links}
        {homeServices}
      </span>
    </footer>
  )
}