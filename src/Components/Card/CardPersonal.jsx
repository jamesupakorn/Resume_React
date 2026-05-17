import { Card, Row, Col } from "antd";
import { useTranslation } from "react-i18next";

const CardPersonal = ({ isMobile }) => {
  const _translation = useTranslation();
  const _t = _translation.t;
  const colSpan = isMobile ? 24 : 12;

  return (
    <>
      <Card title={_t("Personal.ProfileSummary")} className="resume-card">
        <p className="personal-summary">
          {_t("Personal.Summary")}
        </p>
      </Card>

      <Card title={_t("Personal.Personal")} className="resume-card">
        <Row>
          <Col span={colSpan} className="col-start">
            <p>{_t("Personal.Height")}: {_t("Personal.HeightValue")} {_t("Personal.cm")}</p>
          </Col>
          <Col span={colSpan} className="col-start">
            <p>{_t("Personal.Weight")}: {_t("Personal.WeightValue")} {_t("Personal.kg")}</p>
          </Col>
          <Col span={colSpan} className="col-start">
            <p>{_t("Personal.Age")}: {_t("Personal.AgeValue")} {_t("Personal.Year")}</p>
          </Col>
          <Col span={colSpan} className="col-start">
            <p>{_t("Personal.Military")}: {_t("Personal.Exempted")}</p>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="col-start">
            <p>{_t("Personal.Address")}: {_t("Personal.addReal")}</p>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CardPersonal;
