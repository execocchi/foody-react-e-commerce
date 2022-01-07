import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()
  const submitHandler = (e) => {
    e.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountToNumber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountToNumber < 1 ||
      enteredAmountToNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }
    props.onAddToCart(enteredAmountToNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className={classes.details}>Details</button>
      <button className={classes.add}>+ Add</button>
      {!amountIsValid && <p>Please enter valida amount betweeen 1 to 5</p>}
    </form>
  )
}

export default MealItemForm
