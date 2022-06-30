import { Item } from '../components';


const ItemList = ({productList}) => {
    console.log(productList)
    return (
        <div className="container">
            <h3>Lista de productos</h3>
            <div className="row">
                <div className="col">
                    { productList.map(( product ) => <Item key={product.id} product={product}/>
                        ) }
                </div>
            </div>
        </div>
    )
}

export default ItemList