import React from "react";
import "./forgotpassword.css";
import photo from "../../assets/Forgotpassword.png";

const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <div className="container">
        <div className="logo-container">
          <img className="logo" src={photo} alt="Forwordpassword.png" />
        </div>
        <div className="right_row">
          <h1 className="title">Forgot Password!</h1>
          <form>
            <input
              type="text"
              name="email"
              placeholder="Email"
              // value={email}
            />
            <input
              className="button"
              type="button"
              name="submit"
              value="Proceed"
            />
          </form>
          <p className="reset-password"> Reset Password </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
