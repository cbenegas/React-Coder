import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount';
import Swal from 'sweetalert2';
import Checkout from '../../Checkout';
import { cartContext } from '../../../context';
import '../../style.css';

const ItemDetail = ({product}) => {
    const { title, price, image, description, stock } = product;

    const [checkout, setCheckout] = useState(false);
    const { addProduct } = useContext( cartContext );


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })


    const onAdd = ( quantity ) => {
        addProduct({...product, quantity});
        setCheckout(true);
        Toast.fire({
            icon: 'success',
            title: `${title} agregado correctamente (cantidad: ${quantity})`
        })
    }

    return (
        <div className="container">
            <div className="row shadow my-5">
                <div className="col-xs-12 col-md-5 my-4 mx-md-4 mx-0">
                    <div className="d-flex align-items-center h-100"> 
                        <img src={image} className="px-5 py-4 my-3 mx-auto d-block shadow ImgItemDetail" alt={title}/>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 my-4 ">
                    <div className="d-flex align-items-center flex-column pt-5 pb-3">
                        <h5 className="card-title text-center my-4 fs-1 ItemDetailTitle">{title}</h5>
                        <div className="itemPrice mb-2 me-2 align-self-end fs-2 text">${price}</div>
                        <p className="mx-3">{description}</p>
                        {
                            checkout ? <Checkout/>
                                     : <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail