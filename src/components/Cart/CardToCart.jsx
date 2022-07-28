import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItemCount from './CartItemCount';
import { cartContext } from '../../context';
import './styles.css';



const CardToCart = ( { product } ) => {
   
    const { title, price, image, quantity, id, stock, category } = product;

    const { removeProduct } = useContext(cartContext);

  return (
        <div className="card my-3 shadow">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <Link to={`/item/${id}`}><img src={image} alt={title} className="ImgCardToCart shadow p-4 my-3 img-thumbnail"/></Link>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-8 ps-3 align-items-center align-items-md-start d-flex flex-column">
                        <Link to={`/item/${id}`}><h3 className="mt-4 ">{title}</h3></Link>
                        <p className="ItemDetailTitle fs6">{category}</p>
                        <h4>${price}</h4>
                        <CartItemCount initial={quantity} stock={stock}/>
                        <i className="btn bi bi-trash3 fs-4 me-3 mb-3 align-self-end mt-auto" onClick={()=>removeProduct(id)}></i>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardToCart