import React, {useState} from 'react'
import db from '../firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

const CargaDatos = () => {

  const handleNavigate = () => {
    setTimeout(() => {
      window.location.href = '/bolsa';
    }, 3000);}

   const [nombre, setNombre]= useState('')
   const [profesion, setProfesion]= useState('')
   const [telefono, setTelefono]= useState('')
   const [wsp, setWSP]= useState('')


  const handleChange = (e) => {
    setNombre(e.target.value)
  }
  const handleProfesion =(e)=>{
    setProfesion(e.target.value)
  }
  const handleTelefono =(e)=>{
    setTelefono(e.target.value)
  }
  const handleWsp=(e)=>{
    setWSP(e.target.value)
  }
  const EnviarDatos = (e) => {
    e.preventDefault()

    const datosRecopilados = {
      nombre: nombre,
      profesion: profesion,
      numero: telefono,
      whatsapp:wsp
    }
    

    const datosRef= collection(db, 'datos')
    addDoc(datosRef, datosRecopilados)
     .then((doc) => {
      console.log(doc.id)
   
     })
  }
    
  return (
    <div style={{height:"52vh"}}>
      <h1 className='fs-5 text-white bg-secondary mx-auto text-center bienvenidos fw-bold p-2 rounded-3'>Carga tus datos aqui para que aparezcan en la bolsa de trabajo</h1>
      <form className=' d-flex flex-column col-5 mx-auto mt-4 ' onSubmit={EnviarDatos}>
        <input name='nombre' className='my-2 input-group-text text-start' type="text" placeholder='Nombre y Apellido' id='nombre' onChange={handleChange}  value={nombre}/>
        <input name="profesion" className='my-2 input-group-text text-start' type="text" placeholder='a que te dedicas' id='profesion' onChange={handleProfesion} value={profesion}/>
        <input name='numero' className='my-2 input-group-text text-start' type="number" placeholder='Telefono' id='numero' onChange={handleTelefono} value={telefono}/>
        <div className='d-flex  mx-auto my-2 stiloFont'>
            <span> Tenes whatsapp?</span>
            <div className='mx-2'> Si
            <input type="checkbox" className='mx-1' name="whatsapp" id="wsp" onChange={handleWsp}  checked={wsp}/></div>
            <div className='mx-2'> No
            <input type="checkbox" className='mx-1' name="whatsapp" /></div>
        </div>
        <button className='btn btn-outline-secondary  mx-auto my-2' onClick={handleNavigate}>Enviar</button>
      </form>
    </div>
  )
}

export default CargaDatos