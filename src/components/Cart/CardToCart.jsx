import React, { useContext } from 'react';
import CartItemCount from './CartItemCount';
import './styles.css';
import { cartContext } from '../../context';



const CardToCart = ( { product } ) => {
   
    const { title, price, image, quantity, id } = product;

    const { removeProduct } = useContext(cartContext);

  return (
        <div className="card my-3 shadow">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="d-flex align-items-center h-100">
                            <img src={image} alt={title} className="ImgCardToCart shadow p-4 my-3 img-thumbnail"/>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-8 ps-3 d-flex flex-column">
                        <h3 className="my-4 ">{title}</h3>
                        <h4>${price}</h4>
                        <CartItemCount initial={quantity} stock={10}/>
                        <i className="btn bi bi-trash3 fs-4 me-3 mb-3 align-self-end mt-auto" onClick={()=>removeProduct(id)}></i>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardToCart