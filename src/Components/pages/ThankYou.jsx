import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
const ThankYou = () => {

  let params = useParams();

  return (
    <div className="container text-center mt-5">
            <Link className="nav-link mt-4 text-start" to="/">
        <span className="border-bottom border-end p-2 rounded shadow"><HiOutlineArrowNarrowLeft/> Volver a la tienda</span>
      </Link>
      <img src="https://cdn-icons-png.flaticon.com/512/616/616519.png" width={300}/>
      <h5 className='text-uppercase mt-5'>¡Muchas gracias por su compra!</h5>
      <br />
      <p>Le recordamos que el <b>ID</b> de compra es: <b>{params.purchaseid}</b></p>
    </div>
  )
}

export default ThankYou