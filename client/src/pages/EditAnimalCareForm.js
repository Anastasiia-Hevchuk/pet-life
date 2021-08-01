import React, { Component } from "react";
import { Button, Form, Container } from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
import axios from 'axios';
import volunteerPage1 from '../photo/volunteerPage1.jpeg';

export default class EditAnimalCareForm extends Component {

  constructor(props) {
    super(props)

    this.onChangeNameGuardian = this.onChangeNameGuardian.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePlaceOfResidence = this.onChangePlaceOfResidence.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeDescriptionOwner = this.onChangeDescriptionOwner.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nameGuardian: '',
      lastName: '',
      placeOfResidence: '',
      phoneNumber: '',
      descriptionOwner: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/animalcare/edit-animal-care-form/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          nameGuardian: res.data.nameGuardian,
          lastName: res.data.lastName,
          placeOfResidence: res.data.placeOfResidence,
          phoneNumber: res.data.phoneNumber,
          descriptionOwner: res.data.descriptionOwner
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeNameGuardian(e) {
    this.setState({ nameGuardian: e.target.value })
  }

  onChangeLastName (e) {
    this.setState({ lastName : e.target.value })
  }

  onChangePlaceOfResidence(e) {
    this.setState({ placeOfResidence: e.target.value })
  }

  onChangePhoneNumber(e) {
    this.setState({ phoneNumber: e.target.value })
  }

  onChangeDescriptionOwner (e) {
    this.setState({ descriptionOwner : e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const animalCareFormObject = {
      nameGuardian: this.state.nameGuardian,
      lastName: this.state.lastName,
      placeOfResidence: this.state.placeOfResidence,
      phoneNumber: this.state.phoneNumber,
      descriptionOwner: this.state.descriptionOwner
    };

    axios.put('http://localhost:3000/api/animalcare/update-adopt-application/' + this.props.match.params.id, animalCareFormObject)
      .then((res) => {
        console.log(res.data)
        alert('Заявку успішно оновлено!')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect 
    this.props.history.push('/animalcareForm')
  }

  render() {
    return (
      <>
      <Container style={{marginBottom: '25px', marginTop: '25px'}}>
          <Row>
              <div align="justify">
                  <h3 align="center">Редагувати заявку</h3>

              </div>
          </Row>
      </Container>
          <Row>
              <Col md={5}>
                  <Form onSubmit={this.onSubmit}>
                      
                      <Form.Group >
                          <Form.Label>Ім'я</Form.Label>
                          <Form.Control
                              placeholder="Введіть ім.я" 
                              id="name" 
                              type="text"
                              name="nameGuardian"
                              value={this.state.nameGuardian} 
                              onChange={this.onChangeNameGuardian}
                          />    
                      </Form.Group>

                      <Form.Group >
                          <Form.Label>Прізвище</Form.Label>
                          <Form.Control
                              placeholder="Введіть прізвище" 
                              id="last name" 
                              type="text"
                              name="lastName"
                              value={this.lastName}
                              onChange={this.onChangeLastName}
                          />    
                      </Form.Group>

                      <Form.Group >
                          <Form.Label>Місце проживання</Form.Label>
                          <Form.Control
                              placeholder="Введіть місце проживання" 
                              id="placeOfResidence" 
                              type="text"
                              name="placeOfResidence"
                              value={this.placeOfResidence}
                              onChange={this.onChangePlaceOfResidence}
                          />    
                      </Form.Group>

                      <Form.Group >
                          <Form.Label>Номер телефону</Form.Label>
                          <Form.Control
                              placeholder="+ 38(0--) -- -- --- " 
                              id="number" 
                              type="text"
                              name="phoneNumber"
                              value={this.phoneNumber}
                              onChange={this.onChangePhoneNumber}
                          />    
                      </Form.Group>
                      
                      <Form.Group >
                          <Form.Label>Опис</Form.Label>
                          <Form.Control 
                              placeholder="Розкажіть про себе" 
                              id="name" 
                              type="text"
                              name="descriptionOwner"
                              value={this.descriptionOwner}
                              onChange={this.onChangeDescriptionOwner}
                          />
                      </Form.Group>                

                      <Button variant="success" type="submit"> Надіслати </Button>
                  </Form>
              </Col>

              <Col md={7}>
                  <img src={volunteerPage1} height={400} />
              </Col>
          </Row>
  
          </>
    );
  }
}