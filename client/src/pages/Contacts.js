import React, { Component } from 'react';
import { Container, Form , Button} from 'react-bootstrap';
 

export class Contacts extends Component {
    render(){
        return (
            <>
            
            <h1>Контакти</h1>
            <div>
                <div><strong>ВАЖЛИВО &ndash; НАРАЗІ ПРИТУЛОК ПЕРЕПОВНЕНИЙ
                    І НЕ ПРИЙМАЄ НОВИХ ТВАРИН.</strong></div>
                <div><strong>Притулок працює над тим, щоб забезпечити якісні умови проживання для 
                    понад 30 тварин, які знаходяться під нашою опікою.</strong><br /><br /></div>
                <div align="justify">
                    <p><strong>Тел.:</strong> +38 067 215 18 89 (Дуднік Наталія, помічник директора притулку)<br />Прийом телефонних дзвінків з 9:00 до 19:00.</p>
                    <p><strong><br />Часи відвідування</strong></p>
                    <p>з 11.00 до 16.00, субота та неділя</p>
                    <p>понеділок-п'ятниця - санітарні дні (зачинений для відвідування)</p>
                    <p><strong>Адрес:</strong> м Львів, Притулок для бездомних тварин "PetLife"</p>
                    <p>Якщо хочете взяти собаку - звертайтесь до волонтера притулку Мидинського Олександра за телефоном: +38 067 215 18 20</p>
                </div>
            </div>
            <Container style={{ width: '500px'}}>    
            <h2>Зв'яжіться з нами</h2>
                <Form>
                    <Form.Group >
                        <Form.Label>Залиште повідомлення</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Надіслати</Button>
                </Form>
                <Container style={{ display:'flex', justifyContent: 'center', padding: '10px'}}>
                    <div style={{width: '100%'}}>
                        <br/>
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,%20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%A4%D0%B5%D0%B4%D1%8C%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%D0%B0,%2013+(PetLife)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </Container>    
            </Container>

            </>
        )
    }
}
    export default Contacts;