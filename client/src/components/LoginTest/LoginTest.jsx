import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class LoginTest extends Component {
  state = {
    email: "",
    password: "",
    msg: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    // req.body
    console.log(this.props);
    let data = {
      email: this.state.email,
      password: this.state.password
    };

    fetch("http://localhost:3001/login", {
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
        if (!data.loggedIn) {
          console.log(data.msg);
        } else {
          const { token: jwt } = data;
          localStorage.setItem("token", jwt);
          const state = { ...this.state };
          state.msg = "登入成功!";
          this.setState(state);
          // this.props.history.push("/account");
          window.location = "/account";
        }

        // const { token: jwt } = data;
        // localStorage.setItem("token", jwt);

        // if (this.props.userInfo.user.loggedIn) {
        //   const state = { ...this.state };
        //   state.msg = "登入成功!";
        //   this.setState(state);
        //   console.log(this.state);
        //   this.props.history.push("/account");
        // } else {
        //   console.log(this.props.userInfo);
        //   if (this.props.userInfo.user.msg === "不正確的帳號或密碼!") {
        //     const state = { ...this.state };
        //     state.msg = "不正確的帳號或密碼!";
        //     this.setState(state);
        //     console.log(this.state);
        //   } else {
        //     const state = { ...this.state };
        //     state.msg = "請輸入電子信箱及密碼!";
        //     this.setState(state);
        //   }
        //     }
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

export default LoginTest;
