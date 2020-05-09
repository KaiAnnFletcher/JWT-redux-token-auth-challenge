import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Signup from "../components/Signup"

class Sign extends Component {
    state = {
        regfirstname:"",
        reglastname:"",
        regusername:"",
        regpassword:"",
        registered: 0,
        regmessage:""
    }

//logic goes here

render() {
    return (

      <Container>
   
        <Row>
            <Col size="lg-4 sm-12">
            
              <Signup
                handleRegisterSubmit={this.handleRegisterSubmit}
                handleRegisterChange={this.handleInputChange}
                firstname={this.state.regfirstname}
                lastname={this.state.reglastname}
                username={this.state.regusername}
                password={this.state.regpassword}
                message={this.state.regmessage}
                status={this.state.registered}
                />
            </Col>
        </Row>
    </Container>
    )
}
}
export default Sign;