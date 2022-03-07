import React from 'react';

const NavElement = ({text, listStyleType}) => {
  const style = {
    listStyleType: listStyleType ? listStyleType : "none",
  }
  return (
    <div className="nav-element">
        <ul>
            <li style={style}>{text}</li>
        </ul>
    </div>
  )
}

export default NavElement