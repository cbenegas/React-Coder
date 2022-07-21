import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../../';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { db } from "../../../firebase/firebase";
import { doc, collection, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    // const URL_PRODUCT = 'https://fakestoreapi.com/products/';
    const DB_PRODUCTS = 'products';
    const [product, setProduct] = useState( {} );
    const [loading, setLoading] = useState( true );
    const [error, setError] = useState( false );

    const { id } = useParams();    

    useEffect(() => { 
        getProduct()
    }, [id])
    

    const getProduct = async () => {
        try{
            const productsCollection = collection(db, DB_PRODUCTS);
            const refDoc = doc( productsCollection, id );
            const result = await getDoc( refDoc );
            setProduct( { id, ...result.data() } )
        }catch(error){
            setError(true);
        }finally{
            setLoading(false);
        }
}



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