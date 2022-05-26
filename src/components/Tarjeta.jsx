import React from 'react'

const Tarjeta = () => {
 
  return (
    <div>
      <div className='tarjeta'>
        <h1 className='nombre'>Mateo Oliver</h1>
        <h2 className="profesion">Desarrollador Web</h2>
        <p className='telefono'> Telefono +57 3008292929</p>
        <a className='mensaje btn btn-outline-secondary' href='https://wa.me/+542314474837'> Envia un Mensaje</a>
      </div>
    </div>
  )
}

export default Tarjeta