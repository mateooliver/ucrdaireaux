import React from 'react'
import { Link } from "react-router-dom";
import Organigrama from './Organigrama';
import Sugerencia from './Sugerencia'
import CarouselIndex from './Carousel';

const Banner = () => {
  return (
    <div>
          <CarouselIndex/>
    <div className='d-flex justify-content-around '>
  
      <div className='d-flex'>
        <Link  to='/bolsa' >
          <img alt='Banner' style={{height:"350px"}}  src={require('/Users/mateooliver/Documents/Comite/Bolsa De Trabajo/bolsa/src/img/banner1.png')} />
        </Link>
          <div className='opciones'>
              <Organigrama/>
              <Sugerencia/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Banner