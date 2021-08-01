import React,  {useState, useContext} from 'react';
import { AuthContext } from '../context/Auth.Context';
import {useHttp} from '../hooks/http.hook';
import {useHistory} from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
import volunteerPage1 from '../photo/volunteerPage1.jpeg';

export const AdvertisementPage = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [advertisementForm, setAdvertisementForm] = useState({
        nameAnimal:'', 
        genderAnimal:'', 
        city:'', 
        ageAnimal:'', 
        data: '', 
        photo:'', 
        nameOwner:'', 
        lastName:'', 
        phoneNumber:'', 
        description:''
    });

    const changeHandler = e => {
        setAdvertisementForm({...advertisementForm, [e.target.name]: e.target.value });
    }

    const pressHandler = async () => {
        try{
            const data = await request('/api/advertisement/create', 'POST', {...advertisementForm}, {
                Authorization: `Bearer ${auth.token}`
            })
            console.log(data)
            history.push(`/advertisementForm/${data.advertisementForm._id}`);
        } catch (e) {}
    }
    return (
        <>
        <Container style={{marginBottom: '25px', marginTop: '25px'}}>
            <Row>
                <h1>Створити оголошення</h1>
            </Row>
        </Container>
            <Row>
                <Col md={5}>
                    <Form >
                        <Form.Group >
                            <Form.Label>Кличка</Form.Label>
                            <Form.Control
                                placeholder="Введіть кличку" 
                                id="name" 
                                type="text"
                                name="nameAnimal"
                                value={advertisementForm.nameAnimal}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Кличка</Form.Label>
                            <Form.Control
                                placeholder="Стать тварини" 
                                id="genderAnimal" 
                                type="text"
                                name="genderAnimal"
                                value={advertisementForm.genderAnimal}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Місто</Form.Label>
                            <Form.Control
                                placeholder="Введіть місто" 
                                id="city" 
                                type="text"
                                name="city"
                                value={advertisementForm.city}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Вік</Form.Label>
                            <Form.Control
                                placeholder="Введіть вік" 
                                id="ageAnimal" 
                                type="text"
                                name="ageAnimal"
                                value={advertisementForm.ageAnimal}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Дата</Form.Label>
                            <Form.Control
                                placeholder="Введіть дату" 
                                id="data" 
                                type="text"
                                name="data"
                                value={advertisementForm.data}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Дата</Form.Label>
                            <Form.Control
                                placeholder="Введіть дату" 
                                id="data" 
                                type="text"
                                name="data"
                                value={advertisementForm.data}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                        <Form.Group >
                            <Form.Label> Ваше ім'я</Form.Label>
                            <Form.Control
                                placeholder="Введіть ім.я" 
                                id="name" 
                                type="text"
                                name="nameOwner"
                                value={advertisementForm.nameOwner}
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
                                value={advertisementForm.lastName}
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
                                value={advertisementForm.phoneNumber}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Опис</Form.Label>
                            <Form.Control 
                                placeholder="Опишіть деталі про тварину" 
                                id="name" 
                                type="text"
                                name="descriptionOwner"
                                value={advertisementForm.descriptionOwner}
                                onChange={changeHandler}
                            />
                        </Form.Group>                

                        <Button
                            variant="primary" 
                            type="submit"
                            disabled={loading}
                            onClick={pressHandler}>
                                Створити
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
