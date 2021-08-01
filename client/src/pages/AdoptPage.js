import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Col, Card, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


class AdoptPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      type: '',
      gender: '',
      size: '',
      age: '',
      animally: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get('/adopt');
    this.setState({ 
      animals: response.data,
      animally: this.state.animals });
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    if (name ==="type" && value){
      this.setState({animals: this.state.animals.filter(item => item.type === value) });
    };
    if (name ==="size" && value){
      this.setState({animals: this.state.animals.filter(item => item.size === value) });
    };
    if (name ==="gender" && value){
      this.setState({animals: this.state.animals.filter(item => item.gender === value) });
    };
    if (name ==="age" && value){
      this.setState({animals: this.state.animals.filter(item => item.age === value) });
    };
  }
 
  
  render() {
    return (
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem"}}>
        <Form >
          <Form.Row className="align-items-center" style={{justifyContent: 'center'}}>
            <Col xs="auto" className="my-1">
              <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                Preference
              </Form.Label>
              <Form.Control
                as="select"
                name="type"
                type="select"
                className="mb-2"
                id="inlineFormCustomSelect"
                value={this.state.type}
                onChange={this.handleInputChange}
                custom
              >
                <option value="Вид">Вид...</option>
                <option value="Кіт">Коти</option>
                <option value="Собака">Собаки</option>
              </Form.Control>
            </Col>
            <Col xs="auto" className="my-1">
              <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                Preference
              </Form.Label>
              <Form.Control
                as="select"
                type="select"
                name="gender"
                className="mb-2"
                id="inlineFormCustomSelect"
                value={this.state.gender}
                onChange={this.handleInputChange}
                custom
              >
                <option value="Стать">Стать...</option>
                <option value="Хлопчик">Хлопчик</option>
                <option value="Дівчинка">Дівчинка</option>
              </Form.Control>
            </Col>
            <Col xs="auto" className="my-1">
              <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                Preference
              </Form.Label>
              <Form.Control
                as="select"
                type="select"
                name="size"
                className="mb-2"
                id="inlineFormCustomSelect"
                value={this.state.size}
                onChange={this.handleInputChange}
                custom
              >
                <option value="Розмір">Розмір...</option>
                <option value="Маленький">Маленький</option>
                <option value="Середній">Середній</option>
                <option value="Великий">Великий</option>
              </Form.Control>
            </Col>
            <Col xs="1rem">
              <Form.Label htmlFor="inlineFormInput" srOnly>
                Вік
              </Form.Label>
              <Form.Control
                name="age"
                className="mb-2"
                id="inlineFormInput"
                placeholder="Вік"
                value={this.state.age}
                onChange={this.handleInputChange}
              />
            </Col>
          </Form.Row>
        </Form>
        <Row>
          {this.state.animals.map((item) => (
          <Col id={item._id} xs="3">
            <Card style={{ width: "15rem", margin: "1rem"}}>
              <Link to={`/detpet/` + item._id}>
                <Card.Img variant="top" src={item.photo} />{" "}
              </Link>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Стать:{item.gender} / Вік:{item.age}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
           )) }
        </Row>
      </Container>
    );
  }
}

export default AdoptPage;
 