import './CartWidget.css'
// eslint-disable-next-line react/prop-types
function CartWidget({imagen,alt}) {
    return (
        <div className='carrito'>
            <img src={imagen} alt={alt} />
            <p className='paragraph'>10</p>
        </div>
    )
}

export default CartWidget;