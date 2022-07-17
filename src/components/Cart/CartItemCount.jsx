import React, { useState } from 'react'

const CartItemCount = ({ initial=1, stock=10 }) => {

    const [count, setCount] = useState(initial);

    const handlerRemove = () => {
        if (count > 1){
            setCount(count - 1);
        }
    }

    const handlerAdd = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }
  return (
    <div>
        <p>Cantidad</p>
        <span>{initial}</span>
    </div>
  )
}

export default CartItemCount