import React, { Component } from "react";
import LoginNavBar from "../../components/LoginNavbar/LoginNavbar";
import axios from "axios";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../ForgotPassword/ForgotPassword.css";

class UpdatePassword extends Component {
  state = {
    password: "",
    submitted: false,
    eyeChecked: false,
    errors: {}
  };

  schema = Joi.object({
    password: Joi.string()
      .min(5)
      .max(10)
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "此為必填欄位";
              break;
            case "string.min":
              err.message = "密碼至少為5個字元";
              break;
            case "string.max":
              err.message = "密碼最多為10個字元";
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });

  passwordValidate = async () => {
    let password = this.state.password;
    await this.setState({
      changePwdJoi: { password }
    });
    const result = Joi.validate(this.state.changePwdJoi, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleChange = key => e => {
    this.setState({ [key]: e.target.value });
  };

  updatePassword = async e => {
    e.preventDefault();

    const errors = await this.passwordValidate();
    console.log(errors);
    await this.setState({ errors: errors || {} });
    if (errors) return;

    const { password } = this.state;
    const { userId, token } = this.props;
    const {
      data
    } = await axios.post(
      `http://localhost:3001/reset_password/receive_new_password/${userId}/${token}`,
      { password }
    );
    if (!data.success) {
      return toast.error(data.msg.text);
    } else {
      this.setState({ submitted: !this.state.submitted });
      function pageReload() {
        window.location = "/account/orders";
      }
      window.setTimeout(pageReload, 3000);
      return toast.success(data.msg.text);
    }
  };

  handleEyeToggle = () => {
    const isChecked = this.state.eyeChecked;
    this.setState({ eyeChecked: !isChecked });
  };

  render() {
    const { submitted, eyeChecked, errors } = this.state;
    let classes = "fa fa-eye";
    if (!eyeChecked) classes += "-slash";
    let types = "password";
    !eyeChecked ? (types = "password") : (types = "text");
    return (
      <>
        <LoginNavBar />

        {submitted ? (
          <div className="pwd-reset-container text-center">
            <h3 className="text-center mb-4">重置您的密碼</h3>
            <p className="text-center mb-4">新密碼重置完成</p>
            <Link to="/login">回到登入頁面</Link>
          </div>
        ) : (
          <div className="pwd-reset-container" style={{ marginTop: "320px" }}>
            <h3 className="text-center mb-4">重置您的密碼</h3>
            <form onSubmit={this.updatePassword}>
              <div className="form-group position-relative mb-0">
                <input
                  onChange={this.handleChange("password")}
                  value={this.state.password}
                  placeholder="請輸入您的新密碼"
                  type={types}
                  className="form-control "
                  name="password"
                />
                <i
                  className={classes}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "11px",
                    right: "90px",
                    cursor: "pointer",
                    color: "#cacaca"
                  }}
                  onClick={this.handleEyeToggle}
                />
              </div>
              {
                <div className="alert alert-danger error-msg">
                  {errors.password || ""}
                </div>
              }
              <div className="btn-container">
                <button type="submit" className="btn btn-primary submit">
                  更新密碼
                </button>
              </div>
            </form>
          </div>
        )}
        <ToastContainer />
      </>
    );
  }
}

UpdatePassword.propTypes = {
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};

export default UpdatePassword;
