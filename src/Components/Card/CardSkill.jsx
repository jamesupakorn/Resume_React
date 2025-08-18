import { Card, Row, Col, Progress } from "antd";
import { useTranslation } from "react-i18next";

const CardSkill = () => {
  const _translation = useTranslation();
  const _t = _translation.t;
  return (
    <Card title={_t("Skill.Skill")} className="resume-card">
      {/* JSP: เชี่ยวชาญ */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.JSP")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level4")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={80} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* JavaScript: เชี่ยวชาญ */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.JavaScript")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level4")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={80} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* HTML5: เชี่ยวชาญ */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.HTML5")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level4")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={80} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* CSS: เชี่ยวชาญ */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.CSS")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level4")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={80} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* Bootstrap: เชี่ยวชาญ */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.Bootstrap")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level4")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={80} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* Java: เชี่ยวชาญ */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.Java")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level4")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={80} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* C#/.NET Framework: ระดับกลาง */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.CSharpAspNet")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level3")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={60} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* Spring Boot: ระดับกลาง */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.SpringBoot")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level3")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={60} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* React: ระดับกลาง */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.React")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level3")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={60} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* Python: พื้นฐาน */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.Python")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level1")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={20} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* .NET Core MVC: พื้นฐาน */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.NetCoreMVC")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level1")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={20} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* AngularJS: พื้นฐาน */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.AngularJS")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level1")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={20} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
      {/* React Native: พื้นฐาน */}
      <Row align="middle">
        <Col span={6} className="col-center">
          <p>{_t("Skill.ReactNative")}</p>
        </Col>
        <Col span={6} className="col-center">
          <p>{_t("Skill.Level1")}</p>
        </Col>
        <Col span={typeof window !== "undefined" && window.innerWidth <= 600 ? 24 : 12} className={typeof window !== "undefined" && window.innerWidth <= 600 ? "col-center col-mobile-margin" : "col-center"}>
          <Progress percent={20} strokeColor="#378752" showInfo={false} />
        </Col>
      </Row>
    </Card>
  );
};

export default CardSkill;
