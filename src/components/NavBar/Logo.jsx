import '../style.css';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (<Link to="/"><h2 className="logo">RandomStore</h2></Link>)
}

export default Logo