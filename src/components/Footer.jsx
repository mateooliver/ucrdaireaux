import React from 'react'

const Footer = () => {
  return (
    <div className='footer text-white text-center '>
      <div className='stiloFont ' style={{color:'white', fontSize:"15x"}}>
        <p className='pt-3'>Seguinos en las redes Sociales</p>
        <div className='d-flex justify-content-center'>
          <img src={require('/Users/mateooliver/Documents/Comite/Bolsa De Trabajo/bolsa/src/img/facebook (3).png')} alt="" className='mx-2 iconosRedes' />
          <img src={require("/Users/mateooliver/Documents/Comite/Bolsa De Trabajo/bolsa/src/img/instagram (3).png")} alt="" className='iconosRedes'/>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <p className='mt-3 text-dark' style={{fontSize:"9px",fontStyle:"italic"}}>Esta pagina fue creada por <span className='fw-bolder'>Mateo Oliver</span>, en donacion a UCR Daireaux. En React.js</p>
      </div>
    </div>
  )
}

export default Footer