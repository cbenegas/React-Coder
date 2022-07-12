import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount';
import Swal from 'sweetalert2';
import Checkout from '../Checkout';
import { cartContext } from '../../context';

const ItemDetail = ({product}) => {
    const { title, price, image, description } = product;

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
                <div className="col-xs-12 col-md-5 my-4 mx-md-4 mx-0 shadow">
                    <img src={image} className="px-5 py-2 my-3 mx-auto d-block" alt={title} height="200px"/>
                </div>
                <div className="col-xs-12 col-md-6 my-4 shadow">
                    <div className="d-flex align-items-center flex-column pt-5 pb-3">
                        <h5 className="card-title text-center mt-3 mb-3 fs-1 text">{title}</h5>
                        <div className="itemPrice mb-2 text-center fs-2 text">${price}</div>
                        <p className="mx-3">{description}</p>
                        {
                            checkout ? <Checkout/>
                                     : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail