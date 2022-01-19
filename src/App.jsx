import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Intro from './components/pages/Intro'
import Header from './components/Layout/Header'
import Meals from './components/pages/Meals'
import MealDetails from './components/pages/MealsDetails'
import CartProvider from './store/CartProvider'


function App() {
  
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Intro />
          </Route>
          <Route path="/meals" exact>
            <Meals />
          </Route>
          <Route path="/meals-details/:mealId">
            <MealDetails />
          </Route>
        </Switch>
      </main>
    </CartProvider>
  )
}

export default App
