const Item = ({product}) => {
    const { title, price, image } = product
    

    return (
        <div className="col-xs-12 col-md-3 card mx-2 my-4 mx-4 shadow">
                <img src={image} className="card-img-top px-5 py-2 my-3" alt={title} height="280px"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <div className="itemPrice mb-2 text-center">${price}</div>
                    <a href="https://www.google.com.ar">Ver detalles</a>
            </div>
        </div>
        )
    }

    export default Item