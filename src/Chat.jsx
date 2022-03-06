import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}*/

function Message () {
    return (
        <>
            <Row className="justify-content-center">
                <Col md={{span: 11}} className="bg-secondary rounded-3 my-2 p-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                        consequatur.</p>
                    <div className="d-flex flex-row text-dark">
                        <p className="px-1">John Smith</p>
                        <FontAwesomeIcon icon={faCircle} />
                        <p className="px-1">09.02.2022 00:45</p>
                    </div>

                </Col>
            </Row>
        </>
    );
}

class Chat extends React.Component {
    render() {
        return (
            <>
                <Container fluid="md">
                    <Row className="overflow-auto">
                        <Col className="justify-content-center bg-dark text-light rounded-3 mt-2" id="chatBox" style={{height: '500px'}}>
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                        </Col>
                    </Row>
                    <Row className="bg-light rounded-bottom">
                        {/*<Col md={{span: 3}}></Col>*/}
                        <Col md={{span: 4}} className="col-md-4 border-dark rounded-bottom border border-right p-2 text-center">Guest4321</Col>
                        <Col md={{span: 8}} className="col-md-8 message">
                            <input type={"text"} style={{width: '100%', height: '100%'}}></input>
                        </Col>
                    </Row>

                    {/*<Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <Row className="mx-0">
                <Button as={Col} variant="primary">Button #1</Button>
                <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
                <Button as={Col} variant="success">Button #3</Button>
            </Row>*/}
                </Container>
                <Container>
                    <Row className="justify-content-center">

                        <Col className="col-md-7 text-right mx-0 pt-2">
                            <Button type="Submit" className="btn btn-primary rounded border-primary border-4 bg-transparent">Send</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Chat;