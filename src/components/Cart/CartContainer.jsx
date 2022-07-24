import CardToCart from './CardToCart';
import CartForm from './CartForm';
import './styles.css';

const CartContainer = ( { productsInCart, clearAllProducts } ) => {


    return (
        <div className="container shadow CardToCartContainer my-4">
            <div className="row">
                <h2 className="text-center my-3">Productos del Carrito</h2>
                <div className="col-xs-12 col-lg-6 justify-content-center my-4">
                    {
                        productsInCart.map( prod => <CardToCart key={prod.id} product={prod}/> )
                    }
                    <div className="d-flex">
                        <div className="btn btn-secondary my-4 mx-auto" onClick={clearAllProducts}><i className="bi bi-trash3 mt-auto"></i> Vaciar carrito</div>
                    </div>  
                </div>
                <div className="col-xs-12 col-lg-6 my-4">
                    <CartForm productsInCart={productsInCart}/>
            </div>
            </div>
        </div>
    )
}

export default CartContainer