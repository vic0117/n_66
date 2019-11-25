import React, { Component } from "react";
import LoginNavBar from "../../components/LoginNavbar/LoginNavbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
class ForgotPassword extends Component {
  state = { email: "", submitted: false };

  handleChange = e => {
    this.setState({ email: e.target.value });
  };

  sendPasswordResetEmail = async e => {
    e.preventDefault();
    const { email } = this.state;
    const { data } = await axios.post(
      `http://localhost:3001/password/recover/${email}`
    );
    if (!data.success) return toast.error(data.msg.text);
    this.setState({ email, submitted: true });
  };

  render() {
    console.log(this.state);
    const { submitted } = this.state;
    return (
      <>
        <LoginNavBar />
        {submitted ? (
          <div className="pwd-reset-container">
            <p>
              如果您輸入的電子信箱已經存在於我們的系統中，系統將自動寄一封重置密碼的郵件給您。
            </p>
            <Link to="/login" className="ghost-btn">
              返回登入頁面
            </Link>
          </div>
        ) : (
          <div className="pwd-reset-container">
            <h3 className="text-center mb-4">重置您的密碼</h3>
            <p className="my-4">
              如果您在嘗試密碼登入時遇到問題，請使用下列步驟進行重置，以重新取得帳號的存取權。
            </p>
            <form onSubmit={this.sendPasswordResetEmail} method="POST">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="請輸入您的電子信箱..."
                  onChange={this.handleChange}
                />
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="btn-container">
                <button type="submit" className="btn btn-primary submit">
                  發送密碼重設郵件
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

export default ForgotPassword;
