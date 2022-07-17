import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../../';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
// import { db } from "../../firebase/firebase";
// import { doc, getDocs, collection, where, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const URL_PRODUCT = 'https://fakestoreapi.com/products/';

    const [product, setProduct] = useState( {} );
    const [loading, setLoading] = useState( true );
    const [error, setError] = useState( false );

    const { id } = useParams();    

    // useEffect(() => {
    //   const productsCollection = collection(db, 'products');
    //   const refDoc = doc(productsCollection, id)
    //   getDoc(refDoc)
    //   .then(result => {
    //     setProduct(result.data())
    //   })

    // }, [id])
    

    const getProduct = async (id) => {
        try{
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
                loading ? <HashLoader className='position-absolute top-50 start-50 translate-middle'/>
                        : error ? <p>Ha ocurrido un error. Por favor, intente nuevamente mas tarde.</p>
                        : <ItemDetail product={product}/> 
            }
        </>
    )
}

export default ItemDetailContainer