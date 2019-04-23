import React, { Component } from 'react';
import image1 from "../../images/bluechips.png";
import { Link } from "react-router-dom";
import Modal from 'react-awesome-modal';
import "./style.css";
import Deletebutton from "../DeleteBtn";
import axios from "axios";
import API from "../../utils/API"

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      email: '',
      password:''
    }
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.email} ${this.state.password}`);
   var userData = {
      email: this.state.email,
      password: this.state.password
    };

    if (!userData.email || !userData.password) {
      return;
    }

    if(this.state.action === "signIn"){ 
    // If we have an email and password we run the loginUser function and clear the form
      this.loginUser(userData.email, userData.password);
    }
    else{
      axios.post('/signup', {
        email: userData.email,
        password: userData.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    this.setState({
      email: "",
      password: ""
    });
  };
  openModal(action) {
    this.setState({
      visible: true,
      action:action
    });
}
  closeModal() {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <div>
        <nav className="nav nav-pills nav-fill">
          <Link to="/"><img src={image1} alt="logo" className="img-thumbnail logo"></img></Link>
          <Link className="nav-item nav-link heading" to="/">Blue Chips</Link>
          <div className="nav justify-content-end items"> &nbsp;
          <button type="button" className="btn btn-info" data-toggle="button" aria-pressed="false" onClick={() => this.openModal("signIn")}> SignIn</button> &nbsp;
            <section>
              <Modal
                visible={this.state.visible}
                width="400"
                height="300"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()} >                
                  <form className="form formstyle">
                  <div className="form-group">
                      <a href="javascript:void(0);" onClick={() => this.closeModal()}><Deletebutton /></a>
                      <label for="InputEmail1">Email address</label>
                      <input type="email" 
                        className="form-control" 
                        name="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value={this.state.email} 
                        onChange={this.handleInputChange} />
                    </div>
                      <div className="form-group">
                        <label for="InputPassword1">Password</label>
                        <input type="password"
                         className="form-control" 
                         name="password" 
                         placeholder="Password" 
                         value={this.state.password} 
                         onChange={this.handleInputChange}  />
                      </div>
                        <button  className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                  </form>
              </Modal>
            </section>
            <button type="button" className="btn btn-secondary" data-toggle="button" aria-pressed="false" onClick={() => this.openModal("signUp")}>
              SignUp</button> &nbsp;            
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

