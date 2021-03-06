import React, { useState, useEffect } from 'react';
import { ItemList } from '../../components';
import '../style.css';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const URL_PRODUCTS = 'https://fakestoreapi.com/products';
    const [productList, setProductList]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(false);
    
    const { categoryId } = useParams();

    const getProducts = async (categoryId) => {
        const URL = categoryId ? URL_PRODUCTS.concat(`/category/${categoryId}`) : URL_PRODUCTS;

        try{
            const res = await fetch( URL );
            const json = await res.json();
            setProductList(json);
        }catch(error){
            console.log(error);
            setError(true);       
        }finally{
            setLoading(false);  
        }
    }

    useEffect(()=>{
        getProducts(categoryId);
    },[categoryId])


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