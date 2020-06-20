import React from 'react';
import { Container, Table, Button } from 'react-bootstrap'
import Tablebody from '../../components/Table_body/Tablebody'
import DropImage from '../../components/DragImage/DraagImage'
function UploadPage(props) {

    return (
        <Container style={{ marginTop: "15%" }} >
            <Table style={{ border: "2px solid #483187" }} striped bordered hover>
                <tbody>
                    <tr>
                        <Tablebody >test</Tablebody>
                        <Tablebody><Button className="w-100" variant="danger">Delete</Button></Tablebody>
                        <Tablebody><Button className="w-100" style={{ backgroundColor: "#483187" }} >Share</Button></Tablebody>
                    </tr>
                </tbody>
            </Table>
        <DropImage/>
        </Container>
    );
}

export default UploadPage;