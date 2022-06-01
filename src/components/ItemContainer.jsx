import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Tarjeta from './Tarjeta'
import { collection, getDocs } from 'firebase/firestore'
import  db  from '../firebase/firebaseConfig'


const ItemContainer = () => {

 const {categoryId}=useParams() 

const [datos, setDatos] = useState([])

  useEffect(() => {
    const datosRef = collection(db, 'datos')
    getDocs(datosRef)
    .then((resp) => {
      const user=resp.docs.map((doc)=>doc.data())
      setDatos(user)
    })
  }, [categoryId])


  return (
    <div style={{height:"70vh"}} className="mb-4">
      <div className='text-center text-white bg-secondary col-4 mx-auto fs-5 rounded-3 text-uppercase text-break'>Bienvenido a la bolsa de trabajo</div>
      <p className='text-center fst-italic mx-auto'>Aqui encontraras datos de personas del distrito para poder contactar</p>

      <div className='d-flex justify-content-center tarjetas'>
      {datos.map((user) => <Tarjeta user={user} key={user.id}/>)}
      </div>

      <Link to='/cargaDatos' className='text-decoration-none'>
        <div className='sumate '>
          <div className='d-flex justify-content-center'>
            <img className='posicion animate__bounceIn animate__animated animate__3	3 animate__slower	2s animate__delay-3s	4s mb-1' src={require('/Users/mateooliver/Documents/Comite/Bolsa De Trabajo/bolsa/src/img/mensaje.png')} alt='agregate'/>
          </div>
          <div  className=' text-center text-muted ' style={{textDecoration:"none"}}> ¿Te querés anotar?
              <p style={{fontSize:"12px", fontStyle:"italic"}}>Haz click aqui</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ItemContainer