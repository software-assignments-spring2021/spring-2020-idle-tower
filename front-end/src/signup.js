import React, { Component } from "react";
import "./signup.scss";
import { Link } from "react-router-dom";
import validator from "validator";
import { BACKEND_URL } from './_constants';
import { postData } from './_helpers';
import Notification from './notification';


class Signup extends Component {
  constructor (props){
    super (props)
    this.state = {username: "", email:"", password:"", password_confirm:"", notificationText: "Please sign up"};
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePassword_confrim = this.handleChangePassword_confrim.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // create account request
  handleSubmit = event => {
    this.verifyPasswords();

    this.verifyEmail();

    const bodyData = {username: this.state.username, email:this.state.email, password : this.state.password};


    postData(BACKEND_URL + '/signup/add-user', bodyData)
      .then((data) => {
        console.log(data);
        if (data.error) {
          this.setState({notificationText: "Signup Failed. Please try again."});
        } else {
          this.setState({notificationText: "Signup Successful!"});
        }
    });
    console.log('what you sent: ' + JSON.stringify(bodyData)) ;
    event.preventDefault();
  };



  handleChangeUsername = (event) => {
    this.setState({username: event.target.value});
  };
  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };
  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  };
  handleChangePassword_confrim = (event) =>{
    this.setState({password_confirm: event.target.value});
  }
  verifyEmail  = () =>{
    if (!(validator.isEmail(this.state.email))){
        alert("Please enter a valid email address");
    }

  };
  verifyPasswords = () =>{
    if (this.state.password !== this.state.password_confirm) {
      alert("Passwords do not match ");
    }
  };



  render () {
  return (
    <div className="Signup">


      <h2>Signup</h2>
      <Notification text={this.state.notificationText} error="" />

      <form onSubmit = {this.handleSubmit}>
        <label>
          Email: <input type="text" name="email" value = {this.state.email} onChange = {this.handleChangeEmail}/>
        </label>
        <label>
          Password: <input type="password" name="password" value = {this.state.password} onChange = {this.handleChangePassword}/>
        </label>
        <label>
          Confirm Password: <input type="password" name="confirm_password" value = {this.state.password_confirm} onChange = {this.handleChangePassword_confrim}/>
        </label>
        <input type = "submit" value = "Submit"></input>
      </form>

      <br />
      <p>Already a member?</p>
      <Link to="/login" id="login_link">
        Login
      </Link>
    </div>
  );
  };
};


/* Signup.propTypes = {
  notificationText: PropTypes.string,
  error: PropTypes.string,
}; */
export default Signup;
