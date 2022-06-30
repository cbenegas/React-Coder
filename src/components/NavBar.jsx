import './style.css';
import CartWidget from './CartWidget';

const vinos = ['Todos', 'Tintos', 'Rosados', 'Blancos', 'Dulces'];

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><CartWidget/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        { vinos.map( (vino) => { 
                            return (
                                    <li className="nav-item" key={vino}>
                                        <a className="nav-link rounded" aria-current="page" href="#">{vino}</a>
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