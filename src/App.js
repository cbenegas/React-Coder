import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart,
        NavBar,
        ItemDetailContainer, 
        ItemListContainer 
        } from './components';

import { CartProvider } from './context';

function App() {


    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
