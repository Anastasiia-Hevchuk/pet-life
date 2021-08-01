import React from 'react';
import { Carousel } from 'react-bootstrap';
import volunteer1 from '../photo/volunteer1.jpg';
import volunteer2 from '../photo/volunteer2.jpg';
import volunteer from '../photo/volunteer.jpg';

export default function Slider() {

    return (
        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={volunteer1}
                    alt="Volunteer1"
                />
                <Carousel.Caption>
                    <h2>Притулок для тварин PetLife </h2>
                    <p>Вони потребують вашої допомоги!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={volunteer2}
                    alt="Volunteer2"
                />
                <Carousel.Caption>
                    <h2>Притулок для тварин PetLife </h2>
                    <p>Вони потребують вашої допомоги!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={volunteer}
                    alt="Volunteer"
                />
                <Carousel.Caption>
                    <h2>Притулок для тварин PetLife </h2>
                    <p>Вони потребують вашої допомоги!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 
    )
}
