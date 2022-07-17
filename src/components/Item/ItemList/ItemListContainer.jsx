import React, { useState, useEffect } from 'react';
import { ItemList } from '../..';
import '../../style.css';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
// import { db } from "../../firebase/firebase";
// import { getDocs, collection, query } from "firebase/firestore";

const ItemListContainer = () => {
    
    const URL_PRODUCTS = 'https://fakestoreapi.com/products';
    const [productList, setProductList]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(false);
    
    const { categoryId } = useParams();


    // useEffect( (categoryId) => {
    //     const productsCollection = collection(db, 'products');
    //     const q = query(productsCollection, where('category','==',"men's clothings"));
    //     // getDocs(productsCollection)
    //     getDocs(q)
    //     .then(result => {
    //         const lista = result.docs.map(product => {
    //             return {
    //                 'id': product.id,
    //                 ...product.data()}
    //         })
    //         // console.log(result.docs)
    //         console.log(lista);
    //         setProductList(lista);
    //     })
    // })

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
                loading ? <HashLoader className='position-absolute top-50 start-50 translate-middle'/> 
                        : error ? <p>Ha ocurrido un error. Por favor, intente nuevamente mas tarde.</p>
                        : <ItemList productList={productList}/> 
            }
        </div>
    )
}

export default ItemListContainer