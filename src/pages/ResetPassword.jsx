import React from "react";
import image from "../assets/img/1.png";
import "./reset.css";

const ResetPassword = () => {
  return (
    <div className="container">
      <div className="left-side">
        <img src={image} alt="reset-password-logo" className="logo" />
      </div>

      <div className="right-side">
        <h1 className="title">Reset Password!</h1>
        <div className="form_container">
          <form className="reset-form">
            <div className="password-container">
              <input
                type="password"
                className="password"
                placeholder="Old Password"
              />
              <span className="show_password">show</span>
            </div>
            <div className="password-container">
              <input
                type="password"
                className="password"
                placeholder="New Password"
              />
              <span className="show_password">show</span>
            </div>
            <input
              type="button"
              className="submit_button"
              name="submit"
              value="Reset"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
