import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Login from "../components/Login"

class Log extends Component {

state = {
    logfirstname:"",
    loglastname:"",
    logusername:"",
    logmessage:"",
    login:0
};

//Place logic here

render() {
    return(

    <Container>
    <Row>
    <Col size="lg-4 sm-12">

    <Login
        handleLoginSubmit={this.handleLoginSubmit}
        handleInputChange={this.handleInputChange}
        firstname={this.state.logfirstname}
        lastname={this.state.loglastname}
        username={this.state.logusername}
        password={this.state.password}
    />

    </Col>
    </Row>
    </Container>
)
}

}

export default Log;