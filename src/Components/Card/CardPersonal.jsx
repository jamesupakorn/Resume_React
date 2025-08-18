import { Card, Row, Col } from "antd";
import { useTranslation } from "react-i18next";

const CardPersonal = () => {
  const _translation = useTranslation();
  const _t = _translation.t;
  return (
    <Card title={_t("Personal.Personal")}
      className="resume-card">
      <Row>
  <Col span={12} className="col-start">
          <p>
            {_t("Personal.Height")} {_t(":")} {"173"} {_t("Personal.cm")}
          </p>
        </Col>
  <Col span={12} className="col-start">
          <p>
            {_t("Personal.Weight")} {_t(":")} {"56"} {_t("Personal.kg")}
          </p>
        </Col>
  <Col span={12} className="col-start">
          <p>
            {_t("Personal.Age")} {_t(":")} {"30"} {_t("Personal.Year")}
          </p>
        </Col>
  <Col span={12} className="col-start">
          <p>
            {_t("Personal.Military")} {_t(":")} {_t("Personal.Exempted")}
          </p>
        </Col>
      </Row>
      <Row>
  <Col span={24} className="col-start">
          <p>
            {_t("Personal.Address")} {_t(":")} {_t("Personal.addReal")}
          </p>
        </Col>
      </Row>
    </Card>
  );
};

export default CardPersonal;
