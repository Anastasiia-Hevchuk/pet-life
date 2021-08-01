import React, { Component } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";

class MyAnimalCare extends Component {

  render() {
    return (
      <>
        <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Row style={{ margin: "2rem" }}>
            <Col md={5}>
              <img src="https://images.pexels.com/photos/6865046/pexels-photo-6865046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height={265} />
            </Col>
            <Col md={3}>
              <Card style={{ width: "15rem" }}>
                <Card.Body>
                  <Card.Title align="center">Вєня</Card.Title>
                  <Card.Text>
                    <strong>Вік:</strong> 2 роки
                  </Card.Text>
                  <Card.Text>
                    <strong>Порода:</strong> Шотландський висловухий
                  </Card.Text>
                  <Card.Text>
                    <strong>Стать:</strong> Хлопчик
                  </Card.Text>
                  <Card.Text>
                    <strong>Розмір:</strong> Маленький
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title align="center">Стан тварини</Card.Title>
                  <Card.Text>
                    <strong>Здоров'я:</strong> 01.06.2021 зроблено прививку, стан задовільний. Паразитів не виявлено.
                  </Card.Text>
                  <Card.Text>
                    <strong>Харчування:</strong> Зараз Вєня харчується кормом для стерилізованих котів від фірми "Purina".
                  </Card.Text>
                  <Card.Text>
                    <strong>Дозвілля:</strong> Купили нову іграшку - м'ячик з котячою м'ятою. Котик активний, з ним щодня граються.
                  </Card.Text>
                  <Card.Text>
                    <strong>Потреби:</strong> Вами виконано платіж сумою 400 грн, наступний платіж має бути виконано <strong>01.07.2021</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ margin: "2rem" }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/OBdbC-vql6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Row>
        </Container>
      </>
    );
  }
}

export default MyAnimalCare;
