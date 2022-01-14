import React, { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = await fetch(
        'https://foody-ecommerce-default-rtdb.firebaseio.com/meals.json',
      )
      const responseData = await response.json()
      console.log(responseData)

      const fetchMeals = []
      for (const key in responseData) {
        fetchMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          details: responseData[key].details,
          price: responseData[key].price,
        })
      }

      setMeals(fetchMeals)
    }
    fetch()
  }, [])

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
