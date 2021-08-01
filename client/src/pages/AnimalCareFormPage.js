import React,  {useState, useContext} from 'react';
import { AuthContext } from '../context/Auth.Context';
import {useHttp} from '../hooks/http.hook';
import {useHistory} from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
import volunteerPage1 from '../photo/volunteerPage1.jpeg';

export const AnimalCareFormPage = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [animalcareForm, setAnimalCareForm] = useState({
        nameGuardian: '',
        lastName: '',
        placeOfResidence: '',
        phoneNumber: '',
        descriptionOwner: '' 
    });

    const changeHandler = e => {
        setAnimalCareForm({...animalcareForm, [e.target.name]: e.target.value });
    }

    const pressHandler = async () => {
        try{
            const data = await request('/api/animalcare/create/care', 'POST', {...animalcareForm}, {
                Authorization: `Bearer ${auth.token}`
            })
            console.log(data)
            history.push(`/animalcareForm`);
        } catch (e) {}
    }
    return (
        <>
        <Container style={{marginBottom: '25px', marginTop: '25px'}}>
            <Row>
                <div align="justify">
                    <h3 align="center">Стати опікуном</h3>
                    <p>Ви хочете піклуватися про тваринку, але не маєте змоги забрати додому" </p>
                    <p>Тоді оформіть заявку на опікунство!</p>
                </div>
            </Row>
        </Container>
            <Row>
                <Col md={5}>
                    <Form >
                        
                        <Form.Group >
                            <Form.Label>Ім'я</Form.Label>
                            <Form.Control
                                placeholder="Введіть ім.я" 
                                id="nameGuardian" 
                                type="text"
                                name="nameGuardian"
                                value={animalcareForm.nameGuardian}
                                onChange={changeHandler}
                            />    
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Прізвище</Form.Label>
                            <Form.Control
                                placeholder="Введіть прізвище" 
                                id="lastName" 
                                type="name"
                                name="lastName"
                                value={animalcareForm.lastName}
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
                                value={animalcareForm.placeOfResidence}
                                onChange={changeHandler}
                            />    
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Номер телефону</Form.Label>
                            <Form.Control
                                placeholder="+ 38(0--) -- -- --- " 
                                id="phoneNumber" 
                                type="text"
                                name="phoneNumber"
                                value={animalcareForm.phoneNumber}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                        
                        <Form.Group >
                            <Form.Label>Опис</Form.Label>
                            <Form.Control 
                                placeholder="Розкажіть про себе" 
                                id="descriptionOwner" 
                                type="text"
                                name="descriptionOwner"
                                value={animalcareForm.descriptionOwner}
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
