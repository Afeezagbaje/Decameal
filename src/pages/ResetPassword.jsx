import React from 'react'
import image from '../assets/img/1.png'
const ResetPassword = () => {
  return (
      <section>
    <div className="left-side">
    <img src={image} alt="" />
    </div>

    <div classNames="right-side">
    <h3>Reset Password!</h3>
    <div className="old">
    <input type="password" placeholder="Old Password" />
    <span>show</span>
    </div>
    <div className="new">
    <input type="password" placeholder="New Password" />
    <span>show</span>
    </div>
    </div>
    </section>
  )
}

export default ResetPassword