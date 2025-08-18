import React, { useState } from "react";
import { Tabs, Card } from "antd";
import {
  RiEmpathizeFill,
  RiBook2Fill,
  RiBriefcase4Fill,
  RiShirtFill,
} from "react-icons/ri";
import { useTranslation } from "react-i18next";
import Personal from "./Components/Personal";

import "./CSS/MenuTab.css";
import "./CSS/styles.css";
import StudyHis from "./Components/StudyHis";

const { TabPane } = Tabs;

const MenuTab = (props) => {
  const _translation = useTranslation();
  const _t = _translation.t;
  const [activeTabKey, setActiveTabKey] = useState("personal");

  const tabList = [
    {
      key: "personal",
      label: (
        <span>
          <RiEmpathizeFill />
          &nbsp;&nbsp;{_t("tabs.Personal")}
        </span>
      ),
    },
    {
      key: "study",
      label: (
        <span>
          <RiBook2Fill />
          &nbsp;&nbsp;{_t("tabs.Study")}
        </span>
      ),
    },
    {
      key: "work",
      label: (
        <span>
          <RiBriefcase4Fill />
          &nbsp;&nbsp;{_t("tabs.Work")}
        </span>
      ),
    },
    {
      key: "other",
      label: (
        <span>
          <RiShirtFill />
          &nbsp;&nbsp;{_t("tabs.Other")}
        </span>
      ),
    },
  ];
  const contentList = {
    personal: <Personal isMobile={props.isMobile} />,
    study: <StudyHis isMobile={props.isMobile} />,
    work: <p>work content</p>,
    other: <p>other content</p>,
  };
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <div className="Menu">
      <Card
        className="menu-tab-card"
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
        tabProps={{
          size: "middle",
        }}
      >
        {contentList[activeTabKey]}
      </Card>
    </div>
  );
};

export default MenuTab;
