import { useState } from "react";
import { Tabs, Card } from "antd";
import {
  RiEmpathizeFill,
  RiBook2Fill,
  RiBriefcase4Fill,
  RiShirtFill,
} from "react-icons/ri";
import Personal from "./Personal";

import "./MenuTap.css";
import "./styles.css";

const MenuTap = () => {
  return (
    <div className="Menu">
      <Tabs
        tapBarStyle={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Tabs.TabPane
          className="tablinks"
          key="1"
          tab={
            <span>
              <RiEmpathizeFill />
              &nbsp;&nbsp;{_t("tabs.Personal")}
            </span>
          }
        >
          <>
            <div className="Tabsbody">
              <Card title="Default size card" style={{ width: 500 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
            <Personal />
          </>
        </Tabs.TabPane>
        <Tabs.TabPane
          className="tablinks"
          key="2"
          tab={
            <span>
              <RiBook2Fill />
              &nbsp;&nbsp;{_t("tabs.Study")}
            </span>
          }
        >
          Content 2
        </Tabs.TabPane>
        <Tabs.TabPane
          className="tablinks"
          key="3"
          tab={
            <span>
              <RiBriefcase4Fill />
              &nbsp;&nbsp;{_t("tabs.Work")}
            </span>
          }
        >
          Content 3
        </Tabs.TabPane>
        <Tabs.TabPane
          className="tablinks"
          key="4"
          tab={
            <span>
              <RiShirtFill />
              &nbsp;&nbsp;{_t("tabs.Other")}
            </span>
          }
        >
          Content 4
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default MenuTap;
