import React, { useState, useEffect } from 'react';
import { ItemList } from '../..';
import '../../style.css';
import { useParams, Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { db } from "../../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    
    const DB_PRODUCTS = 'products';
    const [productList, setProductList]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(false);
    const [noProducts, setNoProducts] = useState(false);
    
    const { categoryId } = useParams();

    const getProducts = async (categoryId) => {
        setNoProducts(false)
        const productsCollection = collection( db, DB_PRODUCTS );
        const q = categoryId ? query(productsCollection, where('category', '==', categoryId ))
                                : productsCollection;

        try{
            const result = await getDocs(q);
            const lista = await result.docs.map(product => {
                return { 'id': product.id, ...product.data() }
            })
            if (lista.length === 0){
                setNoProducts(true)
            } else {
                setProductList(lista)
            }
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
                        : error ? <p className='container mt-5 h4'>Ha ocurrido un error. Por favor, intente nuevamente mas tarde.</p>
                        : noProducts ? <p className='container mt-5 h4'>No se han encontrado productos para la categoria <span className='fw-bolder text-danger'>{categoryId}</span>. Prueba <Link to="/">Aquí</Link></p>
                        : <ItemList productList={productList}/> 
            }
        </div>
    )
}

export default ItemListContainer