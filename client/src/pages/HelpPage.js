import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import medicinePills from '../photo/medicinePills.jpeg';
import AnimalPills from '../photo/AnimalPills.jpg';
import householdGoods from '../photo/householdGoods.jpeg';
import DogFood from '../photo/DogFood.jpg';
import ToyForDog from '../photo/ToyForDog.jpg';

export const HelpPage = () => {
    
    return (
        <>
        <Container style={{marginBottom: '25px', marginTop: '25px'}}>
            <h2>Допомогти речами</h2>
            <p><br />Якщо ви хочете допомогти речами - ми завжди потребуємо в теплих речах, медикаментах, кормі та ін. Список актуальних потреб притулку можна знайти нижче.</p>
            <p>Допомогу можна відправити Новою поштою:</p><br />
            <p>м. Львів, відділення НП №1, 067 215-17-27, Гевчук Анастасія Олександрівна</p>
            <p>Також можете звертатись: +38 067 215 17 27 (Дуднік Наталія, помічник директора притулку)</p>
            
            <p><a href="/contacts" target="_blank" rel="noopener">Як доїхати до притулку?</a></p>
            <Container  style={{ justifyContent: 'center', padding: '10px'}}>
                <h3>Список речей:</h3><br />
                <Row>
                    <Col md={5}>
                        <img src={medicinePills} height={275} alt='medicinePills'/>
                    </Col>
                    <Col md={3}>        
                        <p><strong>Аптечні медикаменти</strong></p>
                            <ul>
                                <li>Цефтриаксон</li>
                                <li>Азитроміцин</li>
                                <li>Цефалексин</li>
                                <li>Сумамед (сироп)</li>
                                <li>Циклоферон</li>
                                <li>Нифуроксазид (таблетки)</li>
                                <li>Бинти</li>
                                <li>Пелюшки (60х60, 60х90)</li>
                                <li>Смекта</li>
                                <li>Рукавички (S, L)</li>
                            </ul>
                    </Col>        
                </Row>
                <Row>
                    <Col md={3}>        
                        <p><strong>Ветеринарні препарати</strong></p>
                            <ul>
                                <li>Анандін</li>
                                <li>Гіскан</li>
                                <li>Катозал</li>
                                <li>Мікродерм</li>
                                <li>Воротники (всіляких розмірів)</li>
                                <li>Попони (всіляких розмірів)</li>
                                <li>Амоксицилін</li>
                                <li>Ронколейкин</li>
                                <li>Тіопротектін</li>
                            </ul>
                    </Col>                    
                    <Col md={5}>
                        <img src={AnimalPills} height={275} alt='AnomalPills'/>
                    </Col>        
                </Row>
                <Row>
                    <Col md={5}>
                        <img src={householdGoods} height={275} alt='householdGoods'/>
                    </Col>
                    <Col md={3}>        
                        <p><strong>Побутові товари</strong></p>
                            <ul>
                                <li>Пральний порошок, рідке мило, засіб для миття посуду, засіб для чищення Domestos</li>
                                <li>ганчірки, мочалки, швабри з віджиманням</li>
                                <li>кульки міцні (35л)</li>
                                <li>віники</li>
                            </ul>
                    </Col>        
                </Row>
                <br />
                <Row>
                    <Col md={3}>
                        <p><strong>Корм для собак</strong></p>
                            <ul>
                                <li>Крупи (крім перлової)</li>
                                <li>Profine</li>
                                <li>Royal Сanin</li>
                                <li>Purina Pro Plan</li>
                                <li>Клуб 4 лапи</li>
                                <li>ПанПес</li>
                                <li>Nutra Mix (зелений та оранжевий)</li>
                                <li>1st Choiсe</li>

                            </ul>
                    </Col>
                    <Col md={5}>        
                        <img src={DogFood} height={275} alt='DogFood'/>
                    </Col>        
                </Row>
                <br />
                <Row>
                    <Col md={5}>
                        <img src={ToyForDog} height={275} alt='ToyForDog'/>
                    </Col>
                    <Col md={3}>        
                        <p><strong>Товари із зоомагазину</strong></p>
                            <ul>
                                <li>Іграшки для собак</li>
                                <li>нашийники для собак</li>
                                <li>повідці</li>
                                <li>переноски</li>
                                <li>миски</li>
                            </ul>
                    </Col>        
                </Row>

            </Container>             
        </Container>
        </>
        
    )
}