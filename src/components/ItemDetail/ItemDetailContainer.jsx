import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../../components';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const URL_PRODUCT = 'https://fakestoreapi.com/products/';

    const [product, setProduct] = useState( {} );
    const [loading, setLoading] = useState( true );
    const [error, setError] = useState( false );

    const { id } = useParams();    

    const getProduct = async (id) => {
        try{
            // fetch(URL_PRODUCT.concat(id))
            // .then( res => res.json() )
            // .then( json => setProduct( json ) )
            const res = await fetch( URL_PRODUCT.concat(id) );
            const json = await res.json();
            setProduct( json );
        }catch(error){
            setError(true);
        }finally{
            setLoading(false);
        }
}

useEffect( () => { getProduct(id) }, [] )

    return (
        <>
            {
                loading ? <p>Cargando...</p> 
                        : error ? <p>Ha ocurrido un error. Por favor, intente nuevamente mas tarde.</p>
                        : <ItemDetail product={product}/> 
            }
        </>
    )
}

export default ItemDetailContainer