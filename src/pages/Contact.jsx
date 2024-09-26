import { NavLink } from 'react-router-dom'

import sketch from '../assets/sketch.jpg'
import classes from './Contact.module.css'

export default function ContactPage() {
  return (
    <>
      <section className={classes.highlight}>
        <div>
          <h2>Contact Us</h2>
          <h3>Transform Your Home with Generations Remodeling</h3>
          <p>Looking to start your dream renovation? Complete our contact form below<br/> or call us and we will work to make your dream come true.</p>
          <p>5151 Cleveland Dr. Suite 1<br/>Cleveland, Ohio 44145</p>
          <p><strong>Mon-Fri: </strong>8am - 5pm</p>
          <p><strong>Phone</strong>(555)555-5555</p>
          <div className={classes.button_container}>
            <button>Call (555)555-5555</button>
            <button>Message Us</button>
          </div>
        </div>
        <div>
          <img className={classes.sketch} src={sketch}/>
        </div>
      </section>
      <section className={classes.secondary}>
        <div className={classes.contact_description}>
          <h3>Reach Out For Your Next Project:</h3>
          <p>Interested in starting a conversation about your home renovation dreams? Fill out our contact form, and we’ll get back to you promptly to discuss how we can turn those dreams into your reality. From initial consultation to project completion, expect a partnership that values your vision, respects your home, and delivers award-winning design and service.</p>
          <div className={classes.map}>
            <iframe
              className={classes.iframe}
              title='Google Maps: Coverage Area'
              src='https://www.google.com/maps/embed/v1/place?key=AIzaSyAOhnO3T-MwJa06E6yM8nOu108oZYxgzhc&q=Cleveland+OH+Metropolitan+Area&zoom=9&maptype=roadmap' 
            ></iframe>
          </div>
        </div>
        <div className={classes.contact_form_container}>
          <h3>Contact Us</h3>
          <p>Have question? Interested in a quote?
          Fill out the contact form<br/>and we will get right back to you
          </p>
          <form className={classes.contact_form}>
            <label>Name</label>
            <input type="text" placeholder='Your Name'/>
            <label>Email</label>
            <input type="text" placeholder="Your Email"/>
            <label>Phone Number</label>
            <input type="text" placeholder="(555) 000-0000"/>
            <label>Your Message</label>
            <textarea placeholder="Your Message"></textarea>
            <p>By submitting this form you agree to our <NavLink>privacy policy</NavLink></p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}
