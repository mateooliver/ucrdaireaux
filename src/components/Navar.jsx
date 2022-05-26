import React from 'react'
import { Link } from 'react-router-dom'

const NaVar = () => {
  return (
    <div>
        <Link className='Navar' to="/">
            <img alt='logo' className='logoMenu' src={require('/Users/mateooliver/Documents/Comite/Bolsa De Trabajo/bolsa/src/img/logo1.png')} />
        </Link>
    </div>
  )
}

export default NaVar