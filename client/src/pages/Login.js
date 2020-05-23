import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";
//import Login from "../components/Login";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authAction";
import classnames from "classnames";
import "./Login.css"
//import API from "../utils/API";

class Log extends Component {
  constructor() {
    super()
this.state = {
    firstname:"",
    lastname:"",
    username:"",
    password: "",
    errors: {}
};
}
//Place logic here
componentDidMount() {
  //If logged in and user navigates to LOgin page, should redirect them to dashboard/home page
  if(this.props.auth.isAuthenticated) {
    this.props.history.push("/home");
  }
}

componenentWillReceiveProps(nextProps) {
  if(nextProps.auth.isAuthenticated) {
    this.props.history.push("/home");
  }
  if (nextProps.errors) {
    this.setState({
      errors: nextProps.errors
    })
  }
}

onChange = e => {
  this.setState({ [e.target.id]: e.target.value });
};

onSubmit = e => {
  e.preventDefault();

  const userData = {
    firstname: this.state.firstname,
    lastname: this.state.lastname,
    username: this.state.username,
    password: this.state.password
  };

  this.props.loginUser(userData);
};

render() {
  const { errors } = this.state;
    return(

    <Container>
    <Row>
    <Col size="lg-4 sm-12">

    <div className="login styleLoginWrap">
    <div className="login-container styleLoginSubWrap">

    
    <form className="login styleLogin" action="/login" noValidate onSubmit={this.onSubmit}>

        <div className="form-group">
            <label htmlFor="title"><h4>LOGIN</h4></label>
            <input
                onChange={this.onChange}
                id="firstname"
                type="text"
                placeholder="First name"
                value={this.state.firstname}
                required
                className={classnames("", {
                  invalid: errors.firstname || errors.firstnamenotfound
                })}
            />

            <input
                onChange={this.onChange}
                id="lastname"
                type="text"
                placeholder="Last name"
                value={this.state.lastname}
                required
                className={classnames("", {
                  invalid: errors.lastname || errors.lastnamenotfound
                })}
            />

            <input
                onChange={this.onChange}
                id="username"
                type="text"
                placeholder="Username"
                value={this.state.username}
                required
                className={classnames("", {
                  invalid: errors.username || errors.usernamenotfound
                })}
            />

            <input
                onChange={this.onChange}
                id="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                required
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                })}
            />

            <button
            className="btn searchBtn"
            type="submit"
            onClick={this.onChange}>
            Submit
            </button>
        </div>
    </form>
</div>
</div>

    {/* <Login
        onChange={this.onChange}
        firstname={this.state.logfirstname}
        lastname={this.state.loglastname}
        username={this.state.logusername}
        password={this.state.logpassword}
        error={errors.logusername}
    /> */}

    </Col>
    </Row>
    </Container>
)
}

}

Log.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Log);
