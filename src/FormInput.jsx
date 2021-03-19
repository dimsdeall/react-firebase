import React, { useState } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import firebase from 'firebase'

function FormInput() {

    const [name, setName] = useState()
    const [adress, setAdress] = useState()

    const writeUserData = () => {
        //cek data
        firebase.database().ref("users").child(name).get().then(function (snapshot) {
            if (snapshot.exists()) {
                // console.log(snapshot.val());

                window.alert('data alredy exits');
            }
            else {
                // console.log("No data available");

                //input data menentukan dengan id
                // firebase.database().ref('users/' + name).set({
                //     adress: adress,
                // });


                // input data push menambahkan id otomatis
                let ref = firebase.database().ref('users')
                ref.push().set({
                    name: name,
                    adress: adress
                });

            }
        }).catch(function (error) {
            console.error(error);
        });

    }

    return (
        <div>
            <Container>
                <Col>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" onChange={event => setName(event.target.value)} placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAdress">
                                <Form.Label>Adress</Form.Label>
                                <Form.Control type="text" onChange={event => setAdress(event.target.value)} placeholder="Enter Adress" />
                            </Form.Group>
                        </Form.Row>
                        <Row>
                            <Col>
                                <Button onClick={writeUserData}>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Container>
        </div>
    )
}

export default FormInput
