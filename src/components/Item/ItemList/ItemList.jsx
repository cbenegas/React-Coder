import { Item } from '../..';
import { useParams } from 'react-router-dom';

const ItemList = ( { productList } ) => {

    const { categoryId } = useParams();  
    return (
        <div className="container">
            <h3 className="my-3">{categoryId?.length > 0 ? `Lista de productos - ${categoryId}`: 'Lista de productos' }</h3>
            <div className="row justify-content-center">
                { productList.map( ( product ) => <Item key={product.id} product={product}/> ) }
            </div>
        </div>
    )
}

export default ItemList