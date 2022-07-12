import './style.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../context';

const CartWidget = () => {

    const { quantityProd } = useContext(cartContext);

    return (<Link to="/cart" id="cart"><i className="bi bi-cart3"></i><span id="cart-count">{quantityProd || 0}</span></Link>)
}

export default CartWidget