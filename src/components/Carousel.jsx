import React from 'react'
import Carousel from 'react-bootstrap/Carousel'



const CarouselIndex = () => {
  return (
    <div>
        <Carousel className=' mx-auto my-3' style={{width:"73.5vw"}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('/Users/mateooliver/Documents/Comite/Bolsa De Trabajo/bolsa/src/img/imgCarousel2.png')}
                alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('/Users/mateooliver/Documents/Comite/Bolsa De Trabajo/bolsa/src/img/imgCarousel.png')}
                alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselIndex