import React,  {useState, useContext} from 'react';
import { AuthContext } from '../context/Auth.Context';
import {useHttp} from '../hooks/http.hook';
import {useHistory} from 'react-router-dom';
import { Button, Modal, Form, Container } from 'react-bootstrap';
import volunteerPage1 from '../photo/volunteerPage1.jpeg';
import { Row, Col} from 'react-bootstrap';

export const PetsAdoptPage = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [adoptApplication, setAdoptApplication] = useState({
        nameOwner: '', descriptionOwner: '', phoneNumber: ''
    });

    const changeHandler = e => {
        setAdoptApplication({...adoptApplication, [e.target.name]: e.target.value });
    }

    const pressHandler = async () => {
        try{
            const data = await request('/api/pet/generate', 'POST', {...adoptApplication}, {
                Authorization: `Bearer ${auth.token}`
            })
            console.log(data)
            history.push(`/adoptApplication`);
        } catch (e) {}
    }
    return (
        <>
        <Container style={{ padding: '10px'}}>
            <Modal.Header >
                <Modal.Title>Адопція</Modal.Title>
            </Modal.Header>
            <Row>
                <Col md={5}>
                    <Form >
                        
                        <Form.Group >
                            <Form.Label>Ваше ім'я</Form.Label>
                            <Form.Control
                                placeholder="Введіть ім'я" 
                                id="nameOwner" 
                                type="text"
                                name="nameOwner"
                                value={adoptApplication.nameOwner}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                       
                        <Form.Group >
                            <Form.Label>Мобільний номер</Form.Label>
                            <Form.Control
                                placeholder="+ 38(0--) -- -- --- " 
                                id="number" 
                                type="text"
                                name="phoneNumber"
                                value={adoptApplication.phoneNumber}
                                onChange={changeHandler}
                            />    
                        </Form.Group>
                        
                        <Form.Group >
                            <Form.Label>Опис</Form.Label>
                            <Form.Control 
                                placeholder="Напишіть кілька слів про себе та розкажіть чому вас цікавить прихист тварини. 
                                Обов'язково вкажіть правильні контактні дані, щоб ми могли зв'язатись з вами." 
                                id="name" 
                                type="text"
                                name="descriptionOwner"
                                value={adoptApplication.descriptionOwner}
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
                    <img src={volunteerPage1} height={250} />
                </Col>
            </Row>

        </Container>    
            </>
    )
}
/*import React,  {useState, useContext} from 'react';
import { AuthContext } from '../context/Auth.Context';
import {useHttp} from '../hooks/http.hook';
import {useHistory} from 'react-router-dom';
import { Button, Modal, Form, Container } from 'react-bootstrap';

export const PetsAdoptPage = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [adoptApplication, setAdoptApplication] = useState('');

    const pressHandler = async event => {
        try{
            const data = await request('/api/pet/generate', 'POST', {nameOwner: adoptApplication, phoneNumber:adoptApplication}, {
                Authorization: `Bearer ${auth.token}`
            })
            console.log(data)
            history.push(`/detail/${data.adoptApplication._id}`);
        } catch (e) {}
    }
    return (
        <>
        <Container style={{ padding: '10px'}}>
            <Modal.Header >
                <Modal.Title>Аdopting</Modal.Title>
            </Modal.Header>
            <Form >
                <Form.Group >
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        placeholder="+ 38(0--) -- -- --- " 
                        id="number" 
                        type="text"
                        value={adoptApplication.phoneNumber}
                        onChange={e => setAdoptApplication(e.target.value)}
                    />    
                </Form.Group>

                <Form.Group >
                    <Form.Label>Name owner</Form.Label>
                    <Form.Control 
                        placeholder="name owner " 
                        id="name" 
                        type="text"
                        value={adoptApplication.nameOwner}
                        onChange={e => setAdoptApplication(e.target.value)}
                    />
                </Form.Group>

                <Button
                    style={{marginRight: 10}} 
                    disabled={loading}
                    onClick={pressHandler}>
                        Send
                </Button>



            </Form>
        </Container>    
            </>
    )
}
 */

/*
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input 
                        placeholder="+ 38(0--) -- -- --- " 
                        id="number" 
                        type="text"
                        value={adoptApplication}
                        onChange={e => setAdoptApplication(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="adoptApplication">Введіть imya</label>
                </div>
            </div>

        </div>
*/