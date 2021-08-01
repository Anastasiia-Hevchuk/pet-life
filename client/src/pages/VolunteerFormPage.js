import React,  {useState, useContext} from 'react';
import { AuthContext } from '../context/Auth.Context';
import {useHttp} from '../hooks/http.hook';
import {useHistory} from 'react-router-dom';
import { Button, Modal, Form, Container } from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
import volunteerPage1 from '../photo/volunteerPage1.jpeg';
import volunteerPage2 from '../photo/volunteerPage2.jpeg';

export const VolunteerFormPage = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [volunteerForm, setVolunteerForm] = useState({
        nameVolunteer: '',
        lastName: '',
        placeOfResidence: '',
        phoneNumber: '',
        descriptionOwner: '' 
    });

    const changeHandler = e => {
        setVolunteerForm({...volunteerForm, [e.target.name]: e.target.value });
    }

    const pressHandler = async () => {
        try{
            const data = await request('/api/volunteer/create', 'POST', {...volunteerForm}, {
                Authorization: `Bearer ${auth.token}`
            })
            console.log(data)
            history.push(`/volunteerForm/${data.volunteerForm._id}`);
        } catch (e) {}
    }
    return (
        <>
        <Container style={{marginBottom: '25px', marginTop: '25px'}}>
            <Row>
                <Col md={7}>
                    <img src={volunteerPage2} height={400} />
                </Col>
                <Col md={5}>
                    <div align="justify">
                        <h3 align="center">Стати волонтером</h3>
                        <p>Ви активна людина, і у Вас є вільний час на добрі справи?</p>

                        <p>У Вас є бажання здійснювати важливі вчинки? Ви любите тварин і маєте можливість допомагати їм у притулку?</p>

                        <p>Значить, ця інформація для Вас: про те, як стати волонтером притулку для собак і кішок.</p>

                        <p>Щоб стати волонтером в притулку для собак і кішок, зателефонуйте нам за тел.:</p>

                        <p align="center"><strong>+380 (067) 215-17-27</strong></p>

                        <p>і запропонуйте свою допомогу, або зверніться до нас через форму зворотного зв'язку.</p>
                        <p>Ми запропонуємо Вам відвідати наш центр допомоги бездомним тваринам "У добрі руки" і будемо раді Вам в нашій команді!</p>
                    </div>
                </Col>
            </Row>
        </Container>
            <Row>
                <Col md={5}>
                    <Form >
                        
                        <Form.Group >
                            <Form.Label>Ім'я</Form.Label>
                            <Form.Control
                                placeholder="Введіть ім.я" 
                                id="name" 
                                type="text"
                                name="nameVolunteer"
                                value={volunteerForm.nameVolunteer}
                                onChange={changeHandler}
                            />    
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Прізвище</Form.Label>
                            <Form.Control
                                placeholder="Введіть прізвище" 
                                id="last name" 
                                type="text"
                                name="lastName"
                                value={volunteerForm.lastName}
                                onChange={changeHandler}
                            />    
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Місце проживання</Form.Label>
                            <Form.Control
                                placeholder="Введіть місце проживання" 
                                id="placeOfResidence" 
                                type="text"
                                name="placeOfResidence"
                                value={volunteerForm.placeOfResidence}
                                onChange={changeHandler}
                            />    
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Номер телефону</Form.Label>
                            <Form.Control
                                placeholder="+ 38(0--) -- -- --- " 
                                id="number" 
                                type="text"
                                name="phoneNumber"
                                value={volunteerForm.phoneNumber}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                        
                        <Form.Group >
                            <Form.Label>Опис</Form.Label>
                            <Form.Control 
                                placeholder="Яка підтримка нам потрібна? Це може бути як Автопоміч 
                                (перевезення кормів, будматеріалів, тварин, співробітників центру), 
                                так і прибирання в нашому притулку, соціалізація собак і кішок, 
                                вигул тварин, дресирування. Звичайно, цей список не повний. 
                                Напишіть нам, ніж Ви можете допомогти, і ми обов'язково знайдемо
                                призначення Вашим навичкам" 
                                id="name" 
                                type="text"
                                name="descriptionOwner"
                                value={volunteerForm.descriptionOwner}
                                onChange={changeHandler}
                            />
                        </Form.Group>                

                        <Button
                            variant="primary" 
                            type="submit"
                            disabled={loading}
                            onClick={pressHandler}>
                                Надіслати
                        </Button>



                    </Form>
                </Col>

                <Col md={7}>
                    <img src={volunteerPage1} height={400} />
                </Col>
            </Row>
    
            </>
    )
}
