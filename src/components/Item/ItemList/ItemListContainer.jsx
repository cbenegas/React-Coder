import React, { useState, useEffect } from 'react';
import { ItemList } from '../..';
import '../../style.css';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { db, DB_PRODUCTS } from "../../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    
    const [productList, setProductList]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(false);
    
    const { categoryId } = useParams();

    const getProducts = async (categoryId) => {
        const productsCollection = collection( db, DB_PRODUCTS );
        const q = categoryId ? query(productsCollection, where('category', '==', categoryId ))
                                : productsCollection;

        try{
            const result = await getDocs(q);
            const lista = await result.docs.map(product => {
                return { 'id': product.id, ...product.data() }
            })

            setProductList(lista);
        }catch(error){
            console.log(error);
            setError(true);       
        }finally{
            setLoading(false);  
        }
    } 

    useEffect(()=>{
        getProducts(categoryId);
    }, [categoryId] )


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