import React, { useContext,useState } from 'react'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import Checkout from './Checkout'
import{addDoc,collection} from "firebase/firestore"
import db from "../../firebase/firebase"

const Cart = (props) => {
  const[checkout,setCheckout]=useState(false)

  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0
  const cartItemAddHanlder = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={() => cartItemRemoveHandler(item.id)}
            onAdd={() => cartItemAddHanlder(item)}
          />
        )
      })}
    </ul>
  )

  const orderHandler=()=>{
  setCheckout(true)
  }
  const submitOrderHandler=(userData)=>{
    
    const order={
      user:userData,
      orderedItems:cartCtx.items
    };
    const ordersCollection=collection(db,"orders");
    addDoc(ordersCollection,order).then(({id})=>Math.random(id));

  }

  const modalActions=<div className={classes.actions}>
  <button className={classes['button--alt']} onClick={props.onClose}>
    Close
  </button>
  {hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
</div>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout&&< Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
      {!checkout&& modalActions}
      
    </Modal>
  )
}

export default Cart
