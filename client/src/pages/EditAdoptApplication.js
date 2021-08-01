import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditAdoptApplication extends Component {

  constructor(props) {
    super(props)

    this.onChangeNameOwner = this.onChangeNameOwner.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeDescriptionOwner = this.onChangeDescriptionOwner.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nameOwner: '',
      phoneNumber: '',
      descriptionOwner: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/pet/edit-adopt-application/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          nameOwner: res.data.nameOwner,
          phoneNumber: res.data.phoneNumber,
          descriptionOwner: res.data.descriptionOwner
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeNameOwner(e) {
    this.setState({ nameOwner: e.target.value })
  }

  onChangePhoneNumber(e) {
    this.setState({ phoneNumber: e.target.value })
  }

  onChangeDescriptionOwner(e) {
    this.setState({ descriptionOwner: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const adoptApplicationObject = {
      nameOwner: this.state.nameOwner,
      phoneNumber: this.state.phoneNumber,
      descriptionOwner: this.state.descriptionOwner
    };

    axios.put('http://localhost:3000/api/pet/update-adopt-application/' + this.props.match.params.id, adoptApplicationObject)
      .then((res) => {
        console.log(res.data)
        alert('Заявку успішно оновлено!')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect 
    this.props.history.push('/adoptApplication')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Ім'я</Form.Label>
          <Form.Control type="text" value={this.state.nameOwner} onChange={this.onChangeNameOwner} />
        </Form.Group>

        <Form.Group controlId="Number">
          <Form.Label>Номер телефону</Form.Label>
          <Form.Control type="number" value={this.state.phoneNumber} onChange={this.onChangePhoneNumber} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Опис</Form.Label>
          <Form.Control type="text" value={this.state.descriptionOwner} onChange={this.onChangeDescriptionOwner} />
        </Form.Group>

        <Button variant="success" size="lg" block="block" type="submit">
          Зберегти
        </Button>
      </Form>
    </div>);
  }
}