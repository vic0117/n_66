import React, { Component } from "react";
import LoginNavBar from "../../components/LoginNavbar/LoginNavbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../ForgotPassword/ForgotPassword.css";

class UpdatePassword extends Component {
  state = {
    password: "",
    submitted: false
  };

  handleChange = key => e => {
    this.setState({ [key]: e.target.value });
  };

  updatePassword = async e => {
    e.preventDefault();
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
      return toast.success(data.msg.text);
    }
  };

  render() {
    const { submitted } = this.state;

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
          <div className="pwd-reset-container" style={{ marginTop: "330px" }}>
            <h3 className="text-center mb-4">重置您的密碼</h3>
            <form onSubmit={this.updatePassword}>
              <div className="form-group">
                <input
                  onChange={this.handleChange("password")}
                  value={this.state.password}
                  placeholder="請輸入您的新密碼"
                  type="password"
                  className="form-control mb-3"
                  name="password"
                />
                {/* <input
                  onChange={this.handleChange("confirmPassword")}
                  value={this.state.confirmPassword}
                  placeholder="確認您的新密碼"
                  type="password"
                  className="form-control"
                /> */}
              </div>
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
