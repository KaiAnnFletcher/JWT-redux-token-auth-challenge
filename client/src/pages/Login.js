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

state = {
    logfirstname:"",
    loglastname:"",
    logusername:"",
    logpassword: "",
    errors: {}
};

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
    logfirstname: this.state.logfirstname,
    loglastname: this.state.loglastname,
    logusername: this.state.logusername,
    logpassword: this.state.logpassword
  };

  this.props.loginUser(userData);
};

render() {
  const { errors } = this.state;
    return(

    <Container>
    <Row>
    <Col size="lg-4 sm-12">

    <div classname="login styleLoginWrap">
    <div className="login-container styleLoginSubWrap">

    
    <form className="login styleLogin" action="/login" method="post" noValidate onSubmit={this.onSubmit}>

        <div className="form-group">
            <label htmlFor="title"><h4>LOGIN</h4></label>
            <input
                onChange={this.onChange}
                firstname="logfirstname"
                type="text"
                placeholder="First name"
                value={this.state.logfirstname}
                required
                className={classnames("", {
                  invalid: errors.logfirstname || errors.logfirstnamenotfound
                })}
            />

            <input
                onChange={this.onChange}
                lastname="loglastname"
                type="text"
                placeholder="Last name"
                value={this.state.loglastname}
                required
                className={classnames("", {
                  invalid: errors.loglastname || errors.loglastnamenotfound
                })}
            />

            <input
                onChange={this.onChange}
                username="loglusername"
                type="text"
                placeholder="Username"
                value={this.state.logusername}
                required
                className={classnames("", {
                  invalid: errors.logusername || errors.logusernamenotfound
                })}
            />

            <input
                onChange={this.onChange}
                password="logpassword"
                type="password"
                placeholder="Password"
                value={this.state.logpassword}
                required
                className={classnames("", {
                  invalid: errors.logpassword || errors.logpasswordincorrect
                })}
            />

            <button
            className="btn searchBtn"
            typw="submit"
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
