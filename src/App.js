import './App.css';

import { NavBar, ItemListContainer } from './components'


function App() {
  return (
    <>
      <NavBar/>
      <h2>Todavia no se de que va a ser mi tienda <i class="bi bi-emoji-laughing"></i> !!!</h2>
      <img src="http://www.convengamostodos.com/img/enconstruccion.jpg" alt="Pagina en construccion" width="100%" />
      <ItemListContainer greeting="Carlos"/>
    </>
  );
}

export default App;
