import { Item } from '..';


const ItemList = ({productList}) => {
    console.log(productList)
    return (
        <div className="container">
            <h3 className="my-3">Lista de productos</h3>
            <div className="row justify-content-center">
                { productList.map( ( product ) => <Item key={product.id} product={product}/>
                    ) }
            </div>
        </div>
    )
}

export default ItemList