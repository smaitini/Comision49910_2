//import './CartWidget.css'
// eslint-disable-next-line react/prop-types
function CartWidget({imagen,alt}) {
    return (
        <div className='flex justify-between'>
            <img className="w-s h-8 gap-4" src={imagen} alt={alt} />
            <p className="text-white hover:text-red-200 text-lg font-semibold gap-2">10</p>
        </div>
    )
}

export default CartWidget;