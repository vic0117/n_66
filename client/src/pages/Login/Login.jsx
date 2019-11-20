import React from "react";
import { Container, Row } from "react-bootstrap";
import Joi from "joi-browser";
import NavBar from "../../components/NavBar/NavBar";
import "./Login.css";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    msg: {},
    errors: {}
  };

  // schema = Joi.object().keys({
  //   email: Joi.string()
  //     .required()
  //     .messages({
  //       "string.base": `"username" should be a type of 'text'`,
  //       "any.required": `此為必填欄位 `
  //     })
  // });

  schema = Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = `此為必填欄位`;
              break;
            case "string.email":
              err.message = `不正確的email格式`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    password: Joi.string()
      .required()
      .error(() => {
        return {
          message: "此為必填欄位"
        };
      })
  });

  validate = async () => {
    let email = this.state.email;
    let password = this.state.password;
    await this.setState({ joi: { email, password } });
    console.log(this.state.joi);
    const result = Joi.validate(this.state.joi, this.schema, {
      abortEarly: false
    });
    console.log(result);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleLoginSubmit = async e => {
    e.preventDefault();

    const errors = await this.validate();
    console.log(errors);
    await this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server
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
          const state = { ...this.state };
          state.msg.loginMsg = data.msg;
          console.log(data.msg);
          this.setState(state);
        } else {
          const { token: jwt } = data;
          localStorage.setItem("token", jwt);
          const state = { ...this.state };
          state.msg.loginMsg = "登入成功!";
          this.setState(state);
          // this.props.history.push("/account");
          window.location = "/account";
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  handleSignUpSubmit = e => {
    e.preventDefault();
    // req.body
    let data = {
      email: this.state.email,
      password: this.state.password
    };

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
        if (data.loggedIn) {
          // 註冊成功, jwt存進localstorage
          const { token: jwt } = data;
          localStorage.setItem("token", jwt);
          const state = { ...this.state };
          state.msg.signUpMsg = "註冊成功!";
          this.setState(state);
          window.location = "/account";
        } else {
          const state = { ...this.state };
          state.msg.signUpMsg = data.msg;
          this.setState(state);
          console.log(this.state);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  validateProperty = ({ name, value }) => {
    if (name === "email") {
      if (value.trim() === "") return "Email is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  logChange = e => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(e.target);
    if (errorMsg) errors[e.target.name] = errorMsg;
    else delete errors[e.target.name];

    this.setState({ [e.target.name]: e.target.value, errors });
  };

  componentDidMount() {
    // JS DOM control
    let wantSignUp = false;

    let windowWidth = window.innerWidth;

    let signIn = document.querySelector(".signIn");
    let registered = document.querySelector(".registered");
    let mountainBg = document.querySelector(".mountainBg");
    let titleUp = document.querySelector("#titleUp");
    let titleIn = document.querySelector("#titleIn");

    let signInForm = document.querySelector(".sign-in");
    let signUpForm = document.querySelector(".sign-up");
    let signUpBtn = document.querySelector(".__btn");
    let mUp = document.querySelector("#mUp");
    let mIn = document.querySelector("#mIn");

    window.addEventListener("resize", () => {
      windowWidth = window.innerWidth;

      if (windowWidth > 981 && wantSignUp === true) {
        signIn.style.transition = " transform 0s";
        registered.style.transition = " transform 0s";
        mountainBg.style.transition = "opacity 0s";

        registered.style.transform = "translate(-610px, 0)";
        mountainBg.style.transform = "translate(610px, 0)";
        mountainBg.style.opacity = "1";
        signIn.style.transform = "translate(350px, 0)";
        signInForm.style.opacity = "0";
        signUpForm.style.top = "0";
        signUpForm.style.opacity = "1";
        titleUp.style.transform = "translate(0, -100px)";
        titleIn.style.transform = "translate(0, -100px)";
        mUp.style.transform = "translate(0, 50px)";
        mIn.style.transform = "translate(0, 0px)";
      }

      if (windowWidth < 981 && wantSignUp === true) {
        signIn.style.transition = " transform 0s";
        registered.style.transition = " transform 0s";
        mountainBg.style.transition = "opacity 0s";

        registered.style.transform = "translate(0, -550px)";
        mountainBg.style.transform = "translate(0, 0)";
        mountainBg.style.opacity = "0";
        signIn.style.transform = "translate(0, 550px)";
        signInForm.style.opacity = "0";
        signUpForm.style.top = "0";
        signUpForm.style.opacity = "1";
        titleUp.style.transform = "translate(0, -100px)";
        titleIn.style.transform = "translate(0, -100px)";
        mUp.style.transform = "translate(0, 50px)";
        mIn.style.transform = "translate(0, 0px)";
      }
    });

    function horizonMove() {
      wantSignUp = !wantSignUp;

      if (wantSignUp) {
        registered.style.transform = "translate(-610px, 0)";
        mountainBg.style.transform = "translate(610px, 0)";
        signIn.style.transform = "translate(350px, 0)";
        signInForm.style.opacity = "0";
        signUpForm.style.top = "0";
        signUpForm.style.opacity = "1";
        titleUp.style.transform = "translate(0, -100px)";
        titleIn.style.transform = "translate(0, -100px)";
        mUp.style.transform = "translate(0, 50px)";
        mIn.style.transform = "translate(0, 0px)";
      } else {
        registered.style.transform = "translate(0, 0)";
        mountainBg.style.transform = "translate(0, 0)";
        signIn.style.transform = "translate(0, 0)";
        signInForm.style.opacity = "1";
        signUpForm.style.top = "200%";
        signUpForm.style.opacity = "0";
        titleUp.style.transform = "translate(0, 0)";
        titleIn.style.transform = "translate(0, 0)";
        mUp.style.transform = "translate(0, 0px)";
        mIn.style.transform = "translate(0, -50px)";
      }
    }

    function verticalMove() {
      wantSignUp = !wantSignUp;

      if (wantSignUp) {
        registered.style.transform = "translate(0, -550px)";
        mountainBg.style.opacity = "0";
        signIn.style.transform = "translate(0, 550px)";
        signInForm.style.opacity = "0";
        signUpForm.style.top = "0";
        signUpForm.style.opacity = "1";
        titleUp.style.transform = "translate(0, -100px)";
        titleIn.style.transform = "translate(0, -100px)";
        mUp.style.transform = "translate(0, 50px)";
        mIn.style.transform = "translate(0, 0px)";
      } else {
        registered.style.transform = "translate(0, 0)";
        mountainBg.style.opacity = "1";
        signIn.style.transform = "translate(0, 0)";
        signInForm.style.opacity = "1";
        signUpForm.style.top = "200%";
        signUpForm.style.opacity = "0";
        titleUp.style.transform = "translate(0, 0)";
        titleIn.style.transform = "translate(0, 0)";
        mUp.style.transform = "translate(0, 0px)";
        mIn.style.transform = "translate(0, -50px)";
      }
    }

    signUpBtn.addEventListener("click", () => {
      signIn.style.transition = "transform 1.2s ease-in-out";
      registered.style.transition = "transform 1.2s ease-in-out";
      mountainBg.style.transition =
        "transform 1.2s ease-in-out, opacity 0.8s ease-in-out";

      if (windowWidth > 981) {
        horizonMove();
      } else {
        verticalMove();
      }
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <Container className="cont">
          <Row className="loginRow">
            <div className="signIn">
              <div className="logo" />
              <div className="position-relative">
                <form
                  className="form sign-in"
                  onSubmit={this.handleLoginSubmit}
                  method="POST"
                >
                  <h2>會員登入</h2>
                  <label>
                    <input
                      name="email"
                      placeholder="電子信箱"
                      onChange={this.logChange}
                    />
                  </label>
                  {this.state.errors.email && (
                    <div className="alert alert-danger">
                      {this.state.errors.email}
                    </div>
                  )}
                  <label>
                    <input
                      type="password"
                      name="password"
                      placeholder="密碼"
                      onChange={this.logChange}
                    />
                  </label>
                  {this.state.errors.password && (
                    <div className="alert alert-danger">
                      {this.state.errors.password}
                    </div>
                  )}
                  <a href="#6" className="forgot-pass">
                    忘記密碼?
                  </a>
                  <div className="feedback">{this.state.msg.loginMsg}</div>
                  <button type="submit" className="submit">
                    登入
                  </button>
                </form>

                <form
                  className="form sign-up"
                  onSubmit={this.handleSignUpSubmit}
                  method="POST"
                >
                  <div>
                    <h2>會員註冊</h2>
                    <label>
                      <input
                        type="email"
                        name="email"
                        placeholder="電子信箱"
                        onChange={this.logChange}
                      />
                    </label>
                    <label>
                      <input
                        type="password"
                        name="password"
                        placeholder="密碼"
                        onChange={this.logChange}
                      />
                    </label>
                    <label>
                      <input type="password" placeholder="確認密碼" />
                    </label>
                    <div className="feedback">{this.state.msg.signUpMsg}</div>
                    <button type="submit" className="submit register">
                      註冊
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="registered">
              <div className="mountainBg"></div>
              <div className="sub-cont">
                <div className="img">
                  <div className="inner">
                    <div
                      id="titleUp"
                      className="__text m--up"
                      style={{ transition: "1.2s ease-in-out" }}
                    >
                      <h2>加入</h2>
                      <p>探索更多旅程</p>
                    </div>
                    <div
                      id="titleIn"
                      className="__text m--in"
                      style={{ transition: "1.2s ease-in-out" }}
                    >
                      <h2>發現</h2>
                      <p>獨一無二的冒險</p>
                    </div>
                  </div>

                  <div className="__btn">
                    <a id="mUp" href="#2" role="button" className="m--up">
                      註冊
                    </a>
                    <a id="mIn" href="#3" role="button" className="m--in">
                      登入
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
