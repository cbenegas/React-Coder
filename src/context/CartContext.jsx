import React, { createContext, useState, useEffect } from 'react';

export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ( { children } ) => {

    const [ productsInCart, setProductsInCart ] = useState([]);
    const [quantityProd, setQuantityProd] = useState(0);

    useEffect( () => {
        _getQuantity(); 
    }, [ productsInCart ] );
    

    const addProduct = ( prod ) =>{
        if ( _isProductInCart( prod.id ) ){
            const updateProd = productsInCart.find( p => p.id === prod.id );
            updateProd.quantity += prod.quantity;
            const restProd = productsInCart.filter(p => p.id !== prod.id);
            setProductsInCart( [ ...restProd, updateProd] )
        }else {
            setProductsInCart( [...productsInCart, prod] );
        }
    }

    const clearAllProducts = () => {
        setProductsInCart([]);
    } 

    const removeProduct = ( id ) => {
        setProductsInCart( productsInCart.filter( prod => prod.id !== id ) );
    }

    const _isProductInCart = ( id ) => {
        return productsInCart.some(prod => prod.id === id)
    }

    const _getQuantity = () => {
        let quantity = 0;
        productsInCart.forEach( prod => quantity += prod.quantity);
        setQuantityProd(quantity);
        return quantity;
    }

    return (
        <Provider value={ { productsInCart, addProduct, removeProduct, clearAllProducts, quantityProd } }>
            {children}
        </Provider>
    )
}

export default CartProvider