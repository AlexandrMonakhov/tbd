import React, { useState } from "react";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";

import TableContainer from "../Table/TableContainer";

function TabsContainer(props) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => {
              toggle("1");
            }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active" : ""}
            onClick={() => {
              toggle("2");
            }}
          >
            Tab2
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">hui</TabPane>
        <TabPane tabId="2">
          <TableContainer />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TabsContainer;
