import React from 'react';
import { Link } from 'react-router-dom';

const CartReturnToStore = () => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="card col-xs-12 col-md-6 mt-5 shadow">
                <h4 className="card-title my-4 text-center">No tienes productos en el carrito</h4>
                <Link to="/" className="btn btn-primary mb-3">Ir a la tienda</Link>
            </div>
        </div>    
    </div>
  )
}

export default CartReturnToStore