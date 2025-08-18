import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Col, Row, Select } from "antd";

const langChange = (selectedLanguage) => {
  try {
    //console.log(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  } catch (error) {
    console.error("Error occurred while changing language:", error);
  }
};
const ChangeLang = (props) => {
  const _translation = useTranslation();
  const _t = _translation.t;
  return (
    <Row>
      <Col span={props.isMobile ? 0 : 16}></Col>
      <Col span={props.isMobile ? 24 : 8}>
        <Row className="lang-row-right">
          <p className="txtLang">{_t("Lang")} :</p>
          <Select
            defaultValue="en"
            className="selectLang selectLang-center"
            onChange={(value) => langChange(value)}
            options={[
              { value: "en", label: "English" },
              { value: "th", label: "ไทย" },
            ]}
          />
        </Row>
      </Col>
    </Row>
  );
};

export default ChangeLang;
