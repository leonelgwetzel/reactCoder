import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
const ThankYou = () => {

  let params = useParams();

  return (
    <div className="container text-center mt-5">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Emoji_u1f60e.svg/768px-Emoji_u1f60e.svg.png" width={300}/>
      <h2 className='text-uppercase mt-3'>¡Muchas gracias por su compra!</h2>
      <br />
      <h4>Te recordamos que tu ID de compra es: <b>{params.purchaseid}</b></h4>
      <hr />
      <Link className="nav-link mt-4 text-uppercase" to="/">
            <span className="btn btn-outline-dark mt-2">Volver a la tienda</span>
          </Link>
    </div>
  )
}

export default ThankYou