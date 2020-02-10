import React from "react";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <a href="/">Firmside</a>
        <a href="/">Cash</a>
        <a href="/">Counterparty</a>
      </ul>
    </nav>
  );
};
export default sideDrawer;
