import React from 'react'

const CartPay = ( { productsInCart } ) => {

    let totalPay = 0;
    productsInCart.map( prod => totalPay += prod.quantity*prod.price );

  return (
    <div className="card bg-light my-3 ps-3">
        <div className="card-body">
            <p className="fs-3 fw-bold">Total: <span className="fs-3 text-danger ">${totalPay}</span></p>
            <p className="btn btn-primary fw-bolder my-3">Elegir forma de pago</p>
        </div>
    </div>
  )
}

export default CartPay