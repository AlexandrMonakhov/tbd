import React from "react";
import { NavLink } from "react-router-dom";

import { Nav, NavItem } from "reactstrap";

function TabsContainer() {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink to={"/contracts"}>Договоры</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/instructors"}>Инструкторы</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default TabsContainer;
