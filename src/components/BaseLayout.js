// BaseLayout.js

import React from "react";
import { NavLink } from "react-router-dom";

let style = {
  navStyling: {
    margin: 5
  }
};

function BaseLayout({ children }) {
  return (
    <div>
      <div>
        <NavLink to="/" style={style.navStyling}>
          Bank
        </NavLink>
        <NavLink to="/" style={style.navStyling}>
          Home
        </NavLink>
        <NavLink to="/users" style={style.navStyling}>
          Users
        </NavLink>
      </div>
      {children}
    </div>
  );
}

export default BaseLayout;
