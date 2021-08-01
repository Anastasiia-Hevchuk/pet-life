import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Auth.Context';
import { useHttp} from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { Button, Modal, Form, Container } from 'react-bootstrap';

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();

    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect( () => {
        message(error);
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message);
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            
            auth.login(data.token, data.userId);
        } catch (e) {}
    }

    return (
        <>
        <Container style={{ padding: '10px'}}>
            <Modal.Header >
                <Modal.Title>Авторизація</Modal.Title>
            </Modal.Header>
            <Form >

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder="Введіть email" 
                        id="email" 
                        type="text"
                        name="email"
                        className="yellow-input"
                        value={form.email}
                        onChange={changeHandler}/>
                    <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control 
                        placeholder="Введіть пароль" 
                        id="password" 
                        type="password"
                        name="password"
                        className="yellow-input"
                        value={form.password}
                        onChange={changeHandler}/>
                </Form.Group>

                <Button
                    style={{marginRight: 10}} 
                    disabled={loading}
                    onClick={loginHandler}>
                        Увійти
                </Button>

                <Button 
                    variant="primary" 
                    type="submit"
                    onClick={registerHandler}
                    disabled={loading}>
                    Зареєструватися
                </Button>

            </Form>
        </Container>    
            </>

    )
}

/*
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Auth.Context';
import { useHttp} from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { Button, Modal, Form, Container } from 'react-bootstrap';

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();

    const [form, setForm] = useState({
        email: '', password: '', role: ''
    });

    useEffect( () => {
        message(error);
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message);
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            
            auth.login(data.token, data.userId);
        } catch (e) {}
    }

    return (
        <>
        <Container style={{ padding: '10px'}}>
            <Modal.Header >
                <Modal.Title>Авторизація</Modal.Title>
            </Modal.Header>
            <Form >

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder="Введіть email" 
                        id="email" 
                        type="text"
                        name="email"
                        className="yellow-input"
                        value={form.email}
                        onChange={changeHandler}/>
                    <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control 
                        placeholder="Введіть пароль" 
                        id="password" 
                        type="password"
                        name="password"
                        className="yellow-input"
                        value={form.password}
                        onChange={changeHandler}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Роль</Form.Label>
                    <Form.Control
                        as="select" 
                        id="role" 
                        type="check"
                        name="role"
                        className="yellow-input"
                        value={form.role}
                        onChange={changeHandler}
                    >
                        <option value="user">Користувач</option>
                        <option value="admin">Адміністратор</option>
                </Form.Control>
                </Form.Group>

                <Button
                    style={{marginRight: 10}} 
                    disabled={loading}
                    onClick={loginHandler}>
                        Увійти
                </Button>

                <Button 
                    variant="primary" 
                    type="submit"
                    onClick={registerHandler}
                    disabled={loading}>
                    Зареєструватися
                </Button>

            </Form>
        </Container>    
            </>

    )
}

 */

