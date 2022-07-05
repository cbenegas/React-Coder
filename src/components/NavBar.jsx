import './style.css';
import CartWidget from './CartWidget';
import React, {useState, useEffect} from 'react';



const URL_CATEGORIES = 'https://fakestoreapi.com/products/categories';

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(URL_CATEGORIES)
            .then( res => res.json() )
            .then( json => setCategories(json) )
    }, [] );

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><CartWidget/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        { categories.map( (category) => { 
                            return (
                                    <li className="nav-item" key={category}>
                                        <a className="nav-link rounded" aria-current="page" href="#">{category}</a>
                                    </li>
                                    )  
                            }) 
                        }
                    
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar