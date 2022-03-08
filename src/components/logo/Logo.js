import React from "react";
import PropTypes from "prop-types";
import "./logo.css";
import {ReactComponent as LogoSVG} from './logo.svg';

const Logo = ({ textColor, logoStyle }) => {
  const color = {
    color: textColor ? textColor : "white",
  }

  return (
    <div className="logo" style={logoStyle}>
      <div className="text"  style={color}>DecaMea</div>
      <div className="icon">
        <LogoSVG />
      </div>
    </div>
  );
};

Logo.propTypes = {
  logoStyle: PropTypes.object,
};

export default Logo;
