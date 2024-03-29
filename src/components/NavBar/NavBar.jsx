import '../style.css';
import CartWidget from './CartWidget';
import Logo from './Logo';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const DB_PRODUCTS = 'products';
// const URL_CATEGORIES = 'https://fakestoreapi.com/products/categories';
const productsCollection = collection( db, DB_PRODUCTS );

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try{
            const result = await getDocs(productsCollection);
            const allCategories = await result.docs.map( product => product.data().category )
            const uniquesCat = [ ...new Set(allCategories) ];
            setCategories(uniquesCat);
        }catch(error){
            console.log(error); 
        }
    }

    useEffect( () => {
        getCategories()
    }, [] );


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand" href="#"><Logo/></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center">
                        { categories.map( (category) => { 
                            return (
                                    <NavLink to={`/category/${category}`} className="nav-item" key={category}>
                                        <p className="nav-link rounded my-auto" >{category}</p>
                                    </NavLink>
                                    )  
                            })
                        }
                        <CartWidget/>                  
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar