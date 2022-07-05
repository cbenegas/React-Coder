import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../../components';


const ItemDetailContainer = () => {

  const URL_PRODUCT = 'https://fakestoreapi.com/products/2';

  const [product, setProduct] = useState( {} );
  const [loading, setLoading] = useState( true );
  const [error, setError] = useState( false );

  const getProduct = async () => {
    try{
        fetch(URL_PRODUCT)
        .then( res => res.json() )
        .then( json => setProduct( json ) )
    }catch(error){
        console.log(error);
        setError(true);
    }finally{
      setLoading(false);
    }
}

useEffect( () => { getProduct() }, [] )

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