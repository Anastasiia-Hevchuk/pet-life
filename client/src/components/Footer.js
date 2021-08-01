import React from 'react';
import {Container, Row , Col} from 'react-bootstrap';
import logotype from '../logotype.png';
const Footer = () => (
    <Container fluid style={{ backgroundColor: '#212529', color: '#fff'}}>
                
        <Container style={{ display:'flex'}}>
            <Row>
                <Col md={6}>
                <br /><img
                        src={logotype}
                        alt="Logo PetLife"
                        height="45px"
                    />
                    <p><strong> Ветеринарний притулок PetLife</strong></p>
                </Col>
                <Col md={3}>
                    <br />
                    <a  href="/rules">Правила</a> 
                    <br />               
                    <a  href="/about">Про нас</a>            
                </Col>
                <Col md={3}>
                    <br />
                    <a  href="/contacts">Контакти</a> 
                </Col>
            </Row>
        </Container>
              
        <Container style={{ display:'flex', justifyContent: 'center', padding: '10px'}}>
                        
            <div>
                <small>Всі права захищені &copy; 2021 </small>               
            </div>
        </Container>
                    
    </Container>
)

export default Footer;
/*
    <div class="container footer__container">
        <div class="row">
            <div class="col-4 col-lg-2 footer__company-name">Cіріус</div>
            <div class="col-4 col-lg-2">
                <a class="footer__navigation-link" href="http://forum.dogcat.com.ua/" target="_blank">Форум</a>                <a class="footer__navigation-link" href="/ua/page/rules">Правила</a>                <a class="footer__navigation-link" href="/ua/page/help">Наші друзі</a>            </div>
            <div class="col-4 col-lg-2">
                <a class="footer__navigation-link" href="/ua/page/pro-nas">Історія притулку</a>                <a class="footer__navigation-link" href="/ua/page/legal">Статус притулку</a>            </div>
            <div class="col-12 col-lg-2 offset-lg-4">
                <div class="footer__social-bar">
                    <a href="https://www.facebook.com/Shelter.SIRIUS/" class="footer__social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="22"
                             height="22" viewBox="0 0 22 22">
                            <path d="M21 4.334C21 2.582 19.419 1 17.667 1H4.333C2.581 1 1 2.582 1 4.334v13.332C1 19.418 2.581 21 4.334 21H11v-7.556H8.556v-3.333H11V8.812c0-2.24 1.682-4.256 3.75-4.256h2.694v3.333H14.75c-.295 0-.639.358-.639.894v1.328h3.333v3.333h-3.333V21h3.556C19.419 21 21 19.418 21 17.666V4.334z"
                                  class="footer__social-logo"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="footer-bottom__copyright col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    Всі права захищені &copy; 2021                </div>
                <div class="footer-bottom__creators col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    Розроблено командою:
                    <a href="https://animal-id.info/" target="_blank"><img class="animal-id-footer-logo" src="/images/logo_animal-id_info.png" alt="animal-id.info"></a>                </div>
            </div>
        </div>
    </div>
*/