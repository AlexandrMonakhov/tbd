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
        <NavItem>
          <NavLink to={"/students"}>Студенты</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/files"}>Картотека</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/questionnaires"}>Анкеты</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/receipts"}>Квитанции</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/transports"}>Транспорт</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default TabsContainer;
