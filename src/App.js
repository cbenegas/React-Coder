import './App.css';

import Swal from 'sweetalert2';
import { NavBar, 
        ItemListContainer, 
        ItemCount } from './components';
  
  

function App() {

  const onAdd = (count) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: `Agregado correctamente (cantidad: ${count})`
    })
  }

  return (
    <>
      <NavBar/>
      <h2>Todavia no se de que va a ser mi tienda <i className="bi bi-emoji-laughing"></i> !!!</h2>
      <img src="http://www.convengamostodos.com/img/enconstruccion.jpg" alt="Pagina en construccion" width="100%" />
      <ItemListContainer greeting="Carlos"/>
      <h4>Sin Stock</h4>
      <ItemCount initial={1} stock={0} onAdd={onAdd}/>
      <h4>Stock de 5</h4>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  );
}

export default App;
