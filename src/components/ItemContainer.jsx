import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Tarjeta from './Tarjeta'
import { collection, getDocs } from 'firebase/firestore'
import  db  from '../firebase/firebaseConfig'


const ItemContainer = () => {

  useEffect(() => {
    const obtenerDatos = async () => {
    const usuarios= await getDocs(collection(db, 'datos'));
      usuarios.forEach((documento) => {
        console.log(documento.data());
      }) 
  }

  obtenerDatos();
  }, [])


  return (
    <div style={{height:"70vh"}}>
      <div className='text-center text-white bg-secondary col-4 mx-auto fs-5 rounded-3 text-uppercase'>Bienvenido a la bolsa de trabajo</div>
      <p className='text-center fst-italic mx-auto'>Aqui encontraras datos de personas del distrito para poder contactar</p>

      <div className='d-flex justify-content-around'>
          <Tarjeta />
      </div>

      <Link to='/cargaDatos'>
        <div  className='sumate text-center'> ¿Te querés anotar?
            <p style={{fontSize:"12px", fontStyle:"italic"}}>Haz click aqui</p>
        </div>
      </Link>
    </div>
  )
}

export default ItemContainer