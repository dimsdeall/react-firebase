import React from 'react'
import { Container, Table } from 'react-bootstrap'
import firebase from 'firebase'

function TableInput() {
    // let data = firebase.database().ref('users').get()
    // console.log(data);

    var starCountRef = firebase.database().ref('users');
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });

    return (
        <div>
            <Container>
                <Table striped bordered hover variant="">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Adress</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default TableInput
