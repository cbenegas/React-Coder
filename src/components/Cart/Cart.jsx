import React, { useContext } from 'react'
import { cartContext } from '../../context';
import CartContainer from './CartContainer';
import CartReturnToStore from './CartReturnToStore';

const Cart = () => {

    const { productsInCart, clearAllProducts } = useContext(cartContext);

    return (
            <>      
            { 
              (productsInCart.length > 0) ? <CartContainer productsInCart={productsInCart} clearAllProducts={clearAllProducts} />
                                          : <CartReturnToStore/>
            }
          </>      
  )
}

export default Cart