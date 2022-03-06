import React from "react";
import "./logo.css";
import {ReactComponent as LogoSVG} from './logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <div className="text">DecaMea</div>
      <div className="icon">
        <LogoSVG />
      </div>
    </div>
  );
};

export default Logo;
