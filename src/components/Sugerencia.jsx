import React from 'react'

const Sugerencia = () => {
  return (
    <div>
        <div className=' d-flex align-items-center' >
          <form className=' d-flex flex-column col-5 mx-auto mt-4 ' action="https://formsubmit.co/mateooliver.dero@gmail.com" method="POST" >
          <label for="exampleFormControlTextarea1" class="form-label text-center">Escriba aqui abajo su sugerencia, será completamente <strong className="fs-bold">anonima</strong></label>
             <textarea class="form-control" id="exampleFormControlTextarea1" name='Sugerencia' rows="3"></textarea>
              <button className='btn btn-outline-secondary mx-auto my-2' type='submit'>Enviar</button>
          </form>
        </div>
    </div>
  )
}

export default Sugerencia