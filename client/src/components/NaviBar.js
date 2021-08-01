import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../context/Auth.Context';
import logotype from '../logotype.png';
import NavBar from 'react-bootstrap/Navbar';
import { Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Styles= styled.div `
    a, .navbar-brand, .navbar-nav, .navbar-link {
        color: #adb1b8;
        &: hover {
            color: white
        }
    }

`

export const NaviBar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext);
    
    
    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');//main
    }
   
    return (
        <>
        <Styles>
            <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img
                        src={logotype}
                        alt="Logo PetLife"
                        height="60px"
                    />
                    <NavBar.Brand>PetLife - притулок для тварин</NavBar.Brand>
                    <NavBar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavBar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/home">Головна</Link></Nav.Link>
                            <Nav.Link><Link to="/about">Про нас</Link></Nav.Link>
                            <Nav.Link><Link to="/adopt">Адопція</Link></Nav.Link>
                            <Nav.Link><Link to="/contacts">Контакти</Link></Nav.Link>
                            <NavDropdown title="Допомогти" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/help">Допомогти товарами</NavDropdown.Item>
                                <NavDropdown.Item href="/create">Стати волонтером</NavDropdown.Item>
                                <NavDropdown.Item href="/help/money">Допомогти грошима</NavDropdown.Item>
                                <NavDropdown.Item href="/create/advertisement">Створити оголошення</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Мій профіль" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/my-animal-care">Тварини під моєю опікою</NavDropdown.Item>
                                <NavDropdown.Item href="/volunteerForm">Заявки на волонтерство</NavDropdown.Item>
                                <NavDropdown.Item href="/animalcareForm">Заявки на опікунство</NavDropdown.Item>
                                <NavDropdown.Item href="/adoptApplication">Заявки на адопцію</NavDropdown.Item>
                                <NavDropdown.Item href="/advertisementForm">Мої оголошення</NavDropdown.Item>
                            </NavDropdown>
                            
                        
                        </Nav>
                        <Nav>
                            <Button href="/home" variant="light" onClick={logoutHandler}>Вийти/Увійти</Button>
                        </Nav>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
            </Styles>
        </>
            
    );
}

/*
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue-grey darken-1" style={{ padding: '0 5rem'}}>
                                
                    <img
                        src={logotype}
                        alt="Logo PetLife"
                        height="60px"

                    />
                    <span className="brand-logo">PetLife - <small>притулок для тварин</small></span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/home">Головна</NavLink></li>
                        <li><NavLink to="/about">Про нас</NavLink></li>
                        <li><NavLink to="/help">Допомогти</NavLink></li>
                        <li><NavLink to="/adopt">Адопція</NavLink></li>
                        <li><NavLink to="/contacts">Контакти</NavLink></li>
                        <li><a href="/home" onClick={logoutHandler}>Вийти</a></li>
                    </ul>
                </div>
            </nav>            
        </div>
*/