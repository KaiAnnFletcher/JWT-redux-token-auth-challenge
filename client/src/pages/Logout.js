import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authAction";
import "./Logout.css"

class Logout extends Component {
    onLogOutClick = e => {
        e.preventDefault();
        this.props.logoutUser()
    };

    render() {
        const { user } = this.props.auth;
    

    return ( 

        <Container>
        <Row>
        <Col size="lg-4 sm-12">
        <div className="login styleLoginWrap">
        <div className="login-container styleLoginSubWrap">
        <div className="landing-copy col s12 center-align">
        <h4>
            <b>Hey there,</b> {user.username.split(" ")[0]}
            <p className="flow-text grey-text text-darken-1">
            You are logged into{" "}    
            <span className="span-stylee">KAIBRU!</span> Welcome!
            </p>
        </h4>
        <button
        className="btn searchBtn"
        onClick={this.onLogOutClick}>
        Logout
        </button>
        </div>
        </div>
        </div>
        </Col>
        </Row>
        </Container>
    );
}
}

Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Logout);