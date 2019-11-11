import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class RegisterTest extends Component {
  state = {
    email: "",
    password: "",
    msg: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    // req.body
    let data = {
      email: this.state.email,
      password: this.state.password
    };

    // const { data: item } = await axios.post(
    //   "http://localhost:3001/register",
    //   data
    // );
    // console.log(item);
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(this.state);
        if (data.success) {
          const state = { ...this.state };
          state.msg = "註冊成功!";
          this.setState(state);
          console.log(this.state);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  logChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form className="container" onSubmit={this.handleSubmit} method="POST">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={this.logChange}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.logChange}
            name="password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default RegisterTest;
