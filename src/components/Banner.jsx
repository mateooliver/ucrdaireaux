import React from 'react'
import { Link } from "react-router-dom";
import Organigrama from './Organigrama';
import CarouselIndex from './Carousel';
import banner1 from '../img/banner1.png'

const Banner = () => {
  return (
    <div className='marginItemslist'>
          <CarouselIndex/>
    <div className='cardsIndex justify-content-around '>
  
      <div className='cardsIndex'>
        <Link  to='/bolsa' className='mx-auto' >
          <img alt='Banner' className='bannerBolsa' src={banner1} />
        </Link>
          <div className='opciones'>
              <Organigrama/>
              <Link to={'/Sugerencia'} style={{textDecoration:"none"}} > 
                    <div>
                      <div className='sugerencias d-flex align-items-center'>
                          Sugerencias anonimas
                      </div>
                    </div>
    </Link>
             
          </div>
        </div>
    </div>
    </div>
  )
}

export default Banner