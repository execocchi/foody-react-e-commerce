import classes from './Intro.module.css'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <section className={classes.summary}>
      <h2>Best food delivery app in the world</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and get the best food experience at home.
      </p>
      <p>
        Foody allows users to enjoy food from some of the world´s top chefs
        without leaving home. All our meals are cooked with high-quality
        ingredients, just-in-time!
      </p>
      <Link to="/meals" className={classes.button}>
        Enter Marketplace
      </Link>
    </section>
  )
}

export default Intro
