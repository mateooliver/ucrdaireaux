import React from 'react'

const Tarjeta = ({user}) => { 

   if (user.whatsapp !== ''){

    return (
    <div className='tarjeta'>
      <h1 className='nombre'>{user.nombre}</h1>
      <h2 className="profesion">{user.profesion}</h2>
      <p className='telefono'> Telefono: {user.numero}</p>
      <a className='mensaje btn btn-outline-secondary' href={`https://wa.me/${user.telefono}`}> Envia un Whatsapp</a>
    </div>)
  }
 
  return (
    <div>
      <div className='tarjeta'>
        <h1 className='nombre'>{user.nombre}</h1>
        <h2 className="profesion">{user.profesion}</h2>
        <p className='telefono'> Telefono {user.numero}</p>
        <p>Esta persona no posee whatsapp</p>
      </div>
    </div>
    
  )
    
}   

export default Tarjeta