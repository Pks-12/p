import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return(
    <div>
      <input value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>

      <input value={name} onChange={handleQuantityChange}/>
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter the delivery instructions"/>
      <p>Comment:{comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type="radio" value="Pick Up" checked={shipping==="Pick Up"}
        onChange={handleShippingChange}/>
        Pick Up
      </label>
<br/>
<br/>
      <label>
      <input type="radio" value="Delivery" checked={shipping==="Delivery"}
        onChange={handleShippingChange}/>
        Delivery
      </label>
    </div>
  )
}

export default MyComponent
//onChange->Event handler used for the primarily with form element
//eg-> <input>,<radio>,<textarea>,<select>
//Trigger a function every time the value of input change.