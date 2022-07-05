import React, { useState, useEffect } from 'react';
import { ItemList } from '../../components';
import '../style.css'


const ItemListContainer = () => {

    const URL_PRODUCTS = 'https://fakestoreapi.com/products';
    const [productList, setProductList]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(false);
    

    const getProducts = async () => {
        try{
            fetch(URL_PRODUCTS)
            .then( res=> res.json() )
            .then( json=> setProductList(json) )
        }catch(error){
            console.log(error);       
            setError(true);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getProducts();
    },[])


    return (
        <div>
            {
                loading ? <p>Cargando...</p> 
                        : error ? <p>Ha ocurrido un error. Por favor, intente nuevamente mas tarde.</p>
                        : <ItemList productList={productList}/> 
            }
        </div>
    )
}

export default ItemListContainer