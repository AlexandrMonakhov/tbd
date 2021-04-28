import React from "react";

import { Tabs, Tab } from "react-bootstrap";

import tabs from "../../data/tabHeaders";

function TabsContainer() {
  return (
    <Tabs defaultActiveKey="autoschool" id="tabs">
      {tabs.map((tab) => (
        <Tab eventKey={tab.eventKey} title={tab.title} key={tab.id}></Tab>
      ))}
    </Tabs>
  );
}

export default TabsContainer;
