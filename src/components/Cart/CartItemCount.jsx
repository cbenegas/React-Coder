
const CartItemCount = ({ initial=1, stock=10 }) => {

  return (
        <div className="d-flex flex-column align-items-center justify-content-center py-3 px-2 ItemCountContainer">
            <div className="input-group mb-3 size-input">
                <input type="number" className="form-control bntAdd inputbtn" value={initial} readOnly></input>
            </div>
            <p className="align-self-start">Stock: {stock}</p>
        </div>
  )
}

export default CartItemCount