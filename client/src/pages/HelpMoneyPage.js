import React from 'react';
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css"

export default class HelpMoneyPage extends React.Component {
    state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    };
   
    handleInputFocus = (e) => {
      this.setState({ focus: e.target.name });
    }
    
    handleInputChange = (e) => {
      const { name, value } = e.target;
      
      this.setState({ [name]: value });
    }
    
    render() {
      return (
        <Container style={{marginBottom: '25px', marginTop: '25px'}}>
        <div id="PaymentForm">
          <Row>
            <Col md={5}>
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
                <br></br>
                <p><strong><u>   Реквізити</u></strong><u><br /></u></p>
                <p><u>Назва отримувача<br /></u>ГО ПРИТУЛОК ДЛЯ ТВАРИН PetLife</p>
                <p><u>Код отримувача <br /></u>42703881</p>
                <p><u>Рахунок в форматі згідно стандарту IBAN <br /></u>UA433052990000026000016800800 <br /><br /><u>Назва Банку <br /></u>СТОЛИЧНА ФIЛIЯ АТ КБ "ПРИВАТБАНК"</p>
                <p><u>Код Банку (МФО) <br /></u>380269</p>
            </Col>
            <Col md={5}>
                <Form>
                    <Form.Group>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control 
                            type="tel"
                            name="number"
                            placeholder="Enter card number"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Expire date</Form.Label>
                        <Form.Control 
                            type="text"
                            name="expiry" 
                            placeholder="Enter exripe data"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>SVC</Form.Label>
                        <Form.Control 
                            type="tel"
                            name="svc" 
                            placeholder="Enter your cvs"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Pay
                    </Button>
                    <br></br>
                    <hr></hr>
                    <Button variant="primary" type="submit" target="_blank" href="https://www.ipay.ua/ua/p2p/kredobank">
                        Go to online-banking
                    </Button>
                </Form>
            </Col>
            </Row>
          <br/>
          <Jumbotron />
        </div>
        </Container>
      );
    }
  }

// export const HelpMoneyPage = () => {
    
//     return (
//         <>
//             <Container style={{ width: '500px', marginBottom: '30px'}}>
//                 <h1 className="text-center">Допомогти грошима</h1>

//                 <Form>
//                     <Form.Group>
//                         <Form.Label>Сума</Form.Label>
//                         <Form.Control placeholder="Вкажіть суму" />

//                     </Form.Group>
//                     <Button variant="primary" type="submit">Допомогти</Button>
//                 </Form>
   
//             </Container>
//             <Jumbotron />
//         </>
           
//     )
// }