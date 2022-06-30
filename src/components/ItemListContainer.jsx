import React, { useState, useEffect } from 'react';
import { ItemList } from '../components';
import './style.css'


const ItemListContainer = () => {

    const products = [
        {id:'01', name: 'Product1', description: 'Alguna descripcion corta', stock: 10, price: 9},
        {id:'02', name: 'Product2', description: 'Alguna descripcion corta', stock: 10, price: 9},
        {id:'03', name: 'Product3', description: 'Alguna descripcion corta', stock: 10, price: 9},
        {id:'04', name: 'Product4', description: 'Alguna descripcion corta', stock: 10, price: 9},
        {id:'05', name: 'Product5', description: 'Alguna descripcion corta', stock: 10, price: 9},
        {id:'06', name: 'Product6', description: 'Alguna descripcion corta', stock: 10, price: 9},
    ]
    
    const [productList, setProductList]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(false);
    
    
    const getData = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products);
        }, 2000 );
    })


    const getProducts = async () => {
        try{
            const res = await getData;
            setProductList(res);
            setLoading(false);
        }catch(error){
            console.log(error);
            setLoading(false);
            setError(true);
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