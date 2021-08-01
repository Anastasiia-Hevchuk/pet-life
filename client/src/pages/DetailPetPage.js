import React, { Component } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";

class DetailPetPage extends Component {
  constructor(props) {
    super(props);

    this.state = { animals: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/adopt/" + this.props.match.params.id)
      .then((animals) => {
        this.setState({ animals: animals.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Row style={{ margin: "2rem" }}>
            <Col md={5}>
              <img src={this.state.animals.photo} height={265} />
            </Col>
            <Col md={3}>
              <Card style={{ width: "15rem" }}>
                <Card.Body>
                  <Card.Title align="center">{this.state.animals.name}</Card.Title>
                  <Card.Text>
                    <strong>Вік:</strong> {this.state.animals.age} р.
                  </Card.Text>
                  <Card.Text>
                    <strong>Порода:</strong> {this.state.animals.breed}
                  </Card.Text>
                  <Card.Text>
                    <strong>Стать:</strong> {this.state.animals.gender}
                  </Card.Text>
                  <Card.Text>
                    <strong>Розмір:</strong> {this.state.animals.size}
                  </Card.Text>

                  <Button href="/generate" variant="primary">
                    Прихистити
                  </Button>
                  <Button href="/create/care" variant="secondary">
                    Опікати
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title align="center">Про тварину</Card.Title>
                  <Card.Text >{this.state.animals.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default DetailPetPage;
