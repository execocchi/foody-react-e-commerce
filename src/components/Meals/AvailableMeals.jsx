import React, { useEffect,useState } from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import db from "../../firebase/firebase"
import {addDoc,collection,getDocs} from "firebase/firestore";
import { fileUpload } from '../../firebase/fileUpload'



const AvailableMeals = () => {
  
  //upload data//
/*    const mealsHandler=()=>{
    DUMMY_MEALS.forEach(async(meal)=>{
      const imgURL= await fileUpload(meal.img)

      addDoc(collection(db,"meals"),{...meal,img:imgURL})
      
  })
}  */
const [meals, setMeals] = useState([])

  const getMeals=async()=>{
    let mealsList=[]
    const querySnapshot= await getDocs(collection(db,"meals"));
    querySnapshot.forEach((doc)=>{
     
      const data=doc.data()
      mealsList.push(
        <MealItem
        key={doc.id}
        id={doc.id}
        name={data.name}
        description={data.description}
        price={data.price}
        img={data.img}
      />
      )
     
    })
    setMeals(mealsList)
  } 
 
 useEffect(() => {
   getMeals()
  }, [])



  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
        
      </Card>
    </section>
  )
}

export default AvailableMeals
