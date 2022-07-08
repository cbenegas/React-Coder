import './style.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (<Link to="/cart" id="cart"><i className="bi bi-cart3"></i><span id="cart-count">3</span></Link>)
    // return (<>
    //             <i className="bi bi-cart3"></i>
    //             <span id="cart-count">3</span>
    //         </>)
}

export default CartWidget