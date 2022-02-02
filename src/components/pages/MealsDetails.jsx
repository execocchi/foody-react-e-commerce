/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import classes from './Meals-details.module.css'
import db from "../../firebase/firebase"
import {getDoc,doc} from "firebase/firestore";

/* const DUMMY_MEALS = [
  {
    
    name: 'Sushi',
    description: 'Finest fish and veggies',
    details:
      'Sushi (すし, 寿司, 鮨, 鮓, pronounced [sɯɕiꜜ] or [sɯꜜɕi]) is a traditional Japanese dish of prepared vinegared rice (鮨飯, sushi-meshi), usually with some sugar and salt, accompanied by a variety of ingredients (ねた, neta), such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is (sushi rice), also referred to as shari (しゃり), or sumeshi (酢飯).Sushi is traditionally made with medium-grain white rice, though it can be prepared with brown rice or short-grain rice. It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat. Many types of sushi are vegetarian. It is often served with pickled ginger (gari), wasabi, and soy sauce. Daikon radish or pickled daikon (takuan) are popular garnishes for the dish.',
    price: 22.99,
    img:"/public/img/sushi.jpg"
  },
  {
   
    name: 'Schnitzel',
    description: 'A german specialty!',
    details:
      'A schnitzel is a thin slice of meat. The meat is usually thinned by pounding with a meat tenderizer. Most commonly, the meat is breaded before frying. Breaded schnitzel is popular in many countries and is made using veal, pork, chicken, mutton, beef, or turkey. Schnitzel is very similar to the dish escalope in France, tonkatsu in Japan, cotoletta in Italy, kotlet schabowy in Poland, milanesa in Argentina, chuleta valluna in Colombia and chicken fried steak of the United States.',
    price: 16.5,
    img:"/public/img/schinitzel.jpg"
  },
  {
   
    name: 'Barbecue Burger',
    details:
      'Barbecue or barbeque (informally BBQ in the UK and US, barbie in Australia and braai in South Africa) is a term used with significant regional and national variations to describe various cooking methods which use live fire and smoke to cook the food. The term is also generally applied to the devices associated with those methods, the broader cuisines that these methods produce, and the meals or gatherings at which this style of food is cooked and served. The cooking methods associated with barbecuing vary significantly but most involve outdoor cooking. The various regional variations of barbecue can be broadly categorized into those methods which use direct and those which use indirect heating.Indirect barbecues are associated with North American cuisine, in which meat is heated by roasting or smoking over wood or charcoal.[2] These methods of barbecue involve cooking using smoke at low temperatures and long cooking times (several hours). Elsewhere, barbecuing more commonly refers to the more direct application of heat, grilling of food over hot coals or gas. This technique is usually done over direct, dry heat or a hot fire for a few minutes. Within these broader categorizations are further national and regional differences.',
    description: 'American, raw, meaty',
    price: 12.99,
    img:"/public/img/barbecue.jpg"
  },
  {
   
    name: 'Green Bowl',
    details:
      'A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are often dressed, and typically served at room temperature or chilled, though some can be served warm. Garden salads use a base of leafy greens such as lettuce, arugula/rocket, kale or spinach; they are common enough that the word salad alone often refers specifically to garden salads. Other types include bean salad, tuna salad, fattoush, Greek salad (vegetable-based, but without leafy greens), Israeli salad and sōmen salad (a noodle-based salad).',
    description: 'Healthy...and green...',
    price: 18.99,
    img:"/public/img/greenbowl.jpg"
  },
  {
   
    name: 'Pizza Margherita',
    details:
      'Pizza Margherita (more commonly known in English as Margherita pizza) is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.A widespread belief says that in June 1889 the pizzaiolo Raffaele Esposito, Pizzeria Brandis chef, invented a dish called "Pizza Margherita" in honor of the Queen of Italy, Margherita of Savoy, and the Italian unification, since toppings are tomato (red), mozzarella (white) and basil (green), ingredients inspired by the colors of the national flag of Italy.While the name Pizza Margherita may have been popularized because of the Queens visit, a pizza made with the same toppings was already present in Naples between 1796 and 1810. In 1830, in the book Napoli, contorni e dintorni, written by Riccio, it was described as a pizza with tomato, mozzarella and basil. In 1849 Emanuele Rocco recorded different pizza toppings like basil, tomatoes and thin slices of mozzarella; the mozzarella was thinly sliced, and arranged with a flower-shape over the tomato sauce, along with the basil leaves: this may be the real origin of the name Margherita (meaning daisy).',
    description: ' With tomato, mozzarella and basil',
    price: 15.99,
    img:"/public/img/pizza.jpg"
  },
]  */

const MealDetails = (props) => {

  const [MealDetails, setMealDetails] = useState({})
  const params = useParams()

  const getMealDetails=()=>{
    const ref=doc(db,"meals",params.mealId)
    getDoc(ref).then((querySnapshot)=>{
      setMealDetails({
        name:querySnapshot.data().name,
        details:querySnapshot.data().details,
        img:querySnapshot.data().img
      })
    })
    
     
   
  } 
 
 useEffect(() => {
   getMealDetails()
  }, [])

  
  /* const meal = DUMMY_MEALS.find((meal) => meal.id === params.mealId) */
  if (!MealDetails) return <p>"meal not found"</p>

  return (
    <section className={classes.details}>
      <h2>{MealDetails.name}</h2>
      <div>
        <p>{MealDetails.details}</p>
      </div>
      <div>
        <img src={MealDetails.img} alt="" />
      </div>
      <Link to="/meals" className={classes.button}>
        Go to marketplace
      </Link>
    </section>
  )
}

export default MealDetails
