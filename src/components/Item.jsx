import { ItemCount } from '../components';
import Swal from 'sweetalert2';

const Item = ({product}) => {
    const { name, description, stock } = product
    console.log(product)
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
        <div>
                <p>{name}</p>
                <p>{description}</p>
                <ItemCount initial={1} stock={stock} onAdd={onAdd}/>

        </div>
    )
  }
  
  export default Item