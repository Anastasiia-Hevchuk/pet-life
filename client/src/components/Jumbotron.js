import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import volunteer2 from '../photo/volunteer2.jpg';
import styled from 'styled-components'

const Styles = styled.div`
    .jumbo {
        background: url(${volunteer2}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

`;


export const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>Притулок для тварин PetLife</h1>
            <p>"PetLife" - найбільший притулок для безпритульних тварин в Україні. Був створений у 2019 році в м.Львів. З перших днів притулок існує на кошти благодійників та небайдужих до проблем тварин людей.

<br/>З 2019 року ми стерилізуємо та знаходимо постійний дім собакам і котам, допомагаючи гуманно вирішувати проблему величезної кількості бездомних тварин. За рік існування притулку понад 500 тварин знайшли свій дім.

<br/>Наразі у притулку "PetLife" проживає близько 2000 собак і котів. Усі тварини обов’язково стерилізуються, також надається допомога в стерилізації безпритульних та домашніх тварин малозабезпеченим сім’ям у м. Львів та найближчих населених пунктах Львівської області. Для нас важливо привертати увагу громадськості до існуючих проблем та втілювати ефективні проекти на благо суспільства на рівні м. Львова, Львівської області та всієї території України. Ми хочемо створити умови для комфортного співіснування людини та тварин.</p>
        </Container>
    </Jumbo>
    </Styles>
)

export default Jumbotron;