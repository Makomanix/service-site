import { services } from "../services"

import classes from './Services.module.css'

export default function ServicesPage() {


  return (
    <>
      <h2>Services</h2>
      <div className="services">
        {services.map((service) => (
          service.id % 2 === 0 ? 
          <section key={service.id}>
            <span>
              <img className={classes.service_pic} src={service.image} />
            </span>
            <span>
              <h3 className={classes.title}>{service.title}</h3>
              <p className={classes.description}>{service.description}</p>
            </span>
          </section>
            :
          <section key={service.id}>
            <span>
              <h3 className={classes.title}>{service.title}</h3>
              <p className={classes.description}>{service.description}</p>
            </span>
            <span className={classes.odd}>
              <img className={classes.service_pic} src={service.image} />
            </span>
          </section>
          ))}
      </div>
    </>
  )
}