import React,{useRef,useState} from 'react';
import classes from './Checkout.module.css';
import swal from 'sweetalert'

const isEmpty=value=> value.trim()===""

const Checkout = (props) => {

    
    const[formInputValidity,setFormInputValidity]=useState({
        name:true,
        street:true,
        city:true,
        postalCode:true
    });
   const nameInputRef=useRef()
   const streetInputRef=useRef()
   const postalCodeInputRef=useRef()
   const cityInputRef=useRef()
   


    const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredStreet=streetInputRef.current.value;
    const enteredPostalCode=postalCodeInputRef.current.value;
    const enteredCity=cityInputRef.current.value;

    const enteredNameIsValid=!isEmpty(enteredName)
    const enteredStreetIsValid=!isEmpty(enteredStreet)
    const enteredPostalCodeIsValid=!isEmpty(enteredPostalCode)
    const enteredCityIsValid=!isEmpty(enteredCity)

    setFormInputValidity({
        name:enteredNameIsValid,
        street:enteredStreetIsValid,
        postalCode:enteredPostalCodeIsValid,
        city:enteredCityIsValid
    })

    const formIsValid=(enteredNameIsValid&&enteredStreetIsValid&&enteredPostalCodeIsValid&&enteredCityIsValid)

    if (!formIsValid){
        return;
    }

    props.onConfirm({
        name:enteredName,
        street:enteredStreet,
        city:enteredCity,
        postalCode:enteredPostalCode
    })
    swal({
      icon:"success",
      title:"Order Sent",
      timer:"1500",
      buttons:false,      
    })
   setTimeout(()=>window.location.reload(),2000)
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputValidity.name? "": classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputValidity.name&& <p>Please enter a valid name</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.street? "": classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidity.street&& <p>Please enter a valid street</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.postalCode? "": classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputValidity.postalCode&& <p>Please enter a Postal Code</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.city? "": classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'  ref={cityInputRef}/>
        {!formInputValidity.city&& <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button  className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;