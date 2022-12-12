import React, { Fragment } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel1 from '../img/carousel-1.jpg'
import carousel2 from '../img/carousel-2.jpg'
import carousel3 from '../img/carousel-3.jpg'
import offer1 from '../img/offer-1.jpg'
import offer2 from '../img/offer-2.jpg'

const Herosection =()=>{



    return(
        <div className="container hero__section">
         <div className="grid">
            <div className="col-1">
                <Carousel autoPlay={true} infiniteLoop={true} className="carousel">
                <div className="col">
                    <img src={carousel1}/>
                    <p>lorem dalpat</p>
                    </div>
                    <div className="col">
                    <img src={carousel2} />
                    <p>lorem dalpat</p>
                    </div>
                    <div className="col">
                    <img src={carousel3} />
                    <p>lorem dalpat</p>
                </div>
                </Carousel>
            </div>

            <div className="col-2">
                <div className="box col">
                    <img src={offer1} alt="" />
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>

            <div className="col-3">
                <div className="box col">
                    <img src={offer2} alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
         </div>
        </div>
    )
}

export default Herosection;