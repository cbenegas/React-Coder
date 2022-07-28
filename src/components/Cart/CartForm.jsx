import React, { useState, useContext, useEffect } from 'react';
import { db, DB_PRODUCTS, DB_SALES } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../context';

const CartForm = ( { productsInCart } ) => {

    let totalPay = 0;
    productsInCart.map( prod => totalPay += prod.quantity*prod.price );

    const navigate = useNavigate();

    const salesCollection = collection( db, DB_SALES)
    const [user, setUser] = useState({
                                        'name':'', 
                                        'lastName': '', 
                                        'email': '',
                                        'address': '',
                                        'repeat-email': '',
                                        'phone':''
                                    });          
    
    const [denyBuy, setDenyBuy] = useState(true);
    const { clearAllProducts } = useContext(cartContext);

    useEffect( ()=> {
        setDenyBuy( Object.values(user).some(val => val === '' ) )
    }, [user] )
                                
    const addOrder = async ( event ) => {
        event.preventDefault();
        const order = {
            'buyer': user,
            'items': productsInCart,
            'date': serverTimestamp(),
            'state': 'generada'
        }

        try {
            const newOrder = await addDoc( salesCollection, order );
            discountStock();
            clearAllProducts();
            await Swal.fire({
                icon: 'success',
                title: '¡Orden creada exitosamente!',
                text: `El numero de su orden es: ${newOrder.id}`,
            })
        } catch (error) {
            await Swal.fire({
                icon: 'error',
                title: 'Lo sentimos, ha ocurrido un error. Por favor, intente nuevamente mas tarde.',
                text: `Error: ${error}`,
            })
        }finally{
            navigate('/');
        }     
    }


    const discountStock = () => {
        productsInCart.forEach( prod => {
            const product = doc( db, DB_PRODUCTS, prod.id )
            try {
                updateDoc( product, { 'stock': prod.stock - prod.quantity } )
            }catch (error){
                console.log(error)
            }
        })
    }


    const handleChangeUser = ({id, value}) => {
        setUser({...user,
                [id]: value })
    }

    return (
        <div className="card bg-light my-3 ps-3">
            <div className="card-body">
                <p className="fs-3 fw-bold">Total: <span className="fs-3 text-danger ">${totalPay}</span></p>
                <form onChange={({target})=>handleChangeUser(target)} onSubmit={addOrder}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="lastName" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="address" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="phone" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repeat-email" className="form-label">Repita su Email</label>
                        <input type="email" className="form-control" id="repeat-email" required/>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={denyBuy}>Realizar pedido</button>
                </form>
            </div>
        </div>
    )
}

export default CartForm