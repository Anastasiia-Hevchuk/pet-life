import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Slider from "../components/Slider";
import { Row, Col, Card } from 'react-bootstrap';
import homeCard1 from '../photo/homeCard1.jpeg';
import homeCard2 from '../photo/homeCard2.jpeg';
import homeCard3 from '../photo/homeCard3.jpeg';
import Jumbotron from "../components/Jumbotron";
import volunteer1 from '../photo/volunteer1.jpg';

export const HomePage = () => (
    <>
    <Slider />
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={homeCard1}/>
                    <Card.Body>
                        <Card.Title>Лакі</Card.Title>
                        <Card.Text>
                            Стать: Хлопчик / Вік:5
                        </Card.Text>
                        <Button  href="/generate" variant="primary">Прихистити</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={homeCard2}/>
                    <Card.Body>
                        <Card.Title>Ганс</Card.Title>
                        <Card.Text>
                            Стать: Хлопчик / Вік:8
                        </Card.Text>
                        <Button href="/generate" variant="primary">Прихистити</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={homeCard3}/>
                    <Card.Body>
                        <Card.Title>Арчі</Card.Title>
                        <Card.Text>
                            Стать: Хлопчик / Вік:1
                        </Card.Text>
                        <Button href="/generate" variant="primary">Прихистити</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    <Jumbotron/>
    <Container style={{marginBottom: '30px'}}>
        <Row>
            <Col md={7}>
                <img src={volunteer1} height={400} />
            </Col>
            <Col md={5}>
                <h2>Ветеринарний притулок PetLife</h2>
                <p>На жаль, наш притулок не може прихистити усіх бездомних тварин, тож ми закликаємо усіх відповідально ставитися до своїх улюбленців, вчасно стерилізувати собак і котів, а також брати їх із притулків, а не купувати.</p>
                <p>Наразі притулок переповнений і не приймає нових тварин. Ми працюємо над тим, щоб забезпечити якісні умови проживання для понад 3000 тварин, які знаходяться під нашою опікою.</p>

                <p>Наразі нам дуже необхідна допомога як в утриманні наших підопічних та догляді за ними, так і у фінансуванні подальшого будівництва притулку.</p>

                <p>Просимо Вас підтримати діяльність притулку. "PetLife" на разі необхідно:</p>

                <ul>
                    <li>корм для тварин;</li>
                    <li>ветеринарні препарати;</li>
                    <li>будівельні матеріали для будівництва та ремонту старих вольєрів;</li>
                    <li>оплата боргів притулку.</li>
                </ul>
            </Col>
        </Row>
    </Container>
    </>
)