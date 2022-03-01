import React from 'react'
import './login.css' 
import photo from '../../assets/login_image.png'

function Login() {
  return (
    <div className="container">
        <div className="bg_container">
            <img className="logo" src={photo} alt='Login_image.png' />
        </div>


        <div className="input_container">
            <h1 className="title">Welcome!</h1>
            <div className="form_container">
                <form className="login_form">
                    <input className="input_email" type="text" name="email" placeholder="Email" />
                    <div className="password_container">
                        <input className="input_password" type="text" name="email" placeholder="Password" />
                        <span className="show_password">show</span>
                    </div>
                    <input className="submit_button" type="button" name="submit" value="Sign In" />
                    <p className="forgot_password">Forgot Password</p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;