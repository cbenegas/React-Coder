
import React, {useState} from 'react'

const ItemCount = ({ initial=1, stock=10, onAdd, showOnAdd=true }) => {
    const [count, setCount] = useState(initial);

    const handlerRemove = () => {
        if (count > 1){
            setCount(count - 1);
        }
    }

    const handlerAdd = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    const handlerOnAdd = () => {
        if (stock < 1){
            return
        }
        return onAdd(count)
    }


    return (
        <div className="d-flex flex-column align-items-center justify-content-center py-3 px-2 ItemCountContainer">
            <div className="input-group mb-3 size-input">
                <i className="bi bi-dash-square-fill fs-5 me-2 dashPlus" onClick={handlerRemove}></i>
                <input type="number" className="form-control bntAdd inputbtn" value={count} readOnly></input>
                <i className="bi bi-plus-square-fill fs-5 ms-2 dashPlus" onClick={handlerAdd}></i>
            </div>
            <p>Stock: {stock}</p>
            <button className="btn btn-outline-primary fs-6" onClick={()=>handlerOnAdd()}>Agregar al carrito</button>
        </div>
        
    )
}

export default ItemCount