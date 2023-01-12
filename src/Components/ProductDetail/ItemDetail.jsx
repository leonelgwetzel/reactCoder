import ItemCount from './ItemCount';
const ItemDetail = ({product}) => {
  
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center">
          <img src={product.img} width={500} className="img-fluid" alt={product.nombre} />
          <p className='h4 my-2 text-uppercase pt-4'>{product.nombre}</p>
          <em>{product.descripcion}</em>
          <b className='mt-5'>$ {product.precio}</b>
          <ItemCount stock={product.stock}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail