import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Chat from './Chat';
import './App.css';
import Row from "react-bootstrap/Row";
import logo from './VOCO-Logo.svg';
import Col from "react-bootstrap/Col";

function App() {
  return (
      <Container>
        <Container fluid>
          <Row>
            <Col>
              <img src={logo} className="App-logo p-2 float-start" alt="logo"/>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="App justify-content-center">
            <Chat />
          </Row>
        </Container>

      </Container>
  );
}

export default App;