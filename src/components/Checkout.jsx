import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <Link to="/cart" className="btn btn-primary">Finalizar Compra</Link>
  )
}

export default Checkout