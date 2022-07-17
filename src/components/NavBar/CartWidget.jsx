import '../style.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context';

const CartWidget = () => {

    const { quantityProd } = useContext(cartContext);

    return (<Link to="/cart" id="cart" className="ms-5">
                <i className="bi bi-cart3"></i>
                 { quantityProd > 0 && <span id="cart-count">{quantityProd}</span> }
                </Link>)
}

export default CartWidget