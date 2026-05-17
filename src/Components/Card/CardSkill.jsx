import { Card, Row, Col, Progress } from "antd";
import { useTranslation } from "react-i18next";

const CardSkill = ({ isMobile }) => {
  const _translation = useTranslation();
  const _t = _translation.t;
  const nameSpan = isMobile ? 12 : 6;
  const levelSpan = isMobile ? 12 : 6;
  const progressSpan = isMobile ? 24 : 12;
  const progressClass = isMobile ? "col-center col-mobile-margin" : "col-center";

  const skills = [
    { key: "Skill.JSP",          level: "Skill.Level4", percent: 80 },
    { key: "Skill.JavaScript",   level: "Skill.Level4", percent: 80 },
    { key: "Skill.HTML5",        level: "Skill.Level4", percent: 80 },
    { key: "Skill.CSS",          level: "Skill.Level4", percent: 80 },
    { key: "Skill.Bootstrap",    level: "Skill.Level4", percent: 80 },
    { key: "Skill.Java",         level: "Skill.Level4", percent: 80 },
    { key: "Skill.CSharpAspNet", level: "Skill.Level3", percent: 60 },
    { key: "Skill.SpringBoot",   level: "Skill.Level3", percent: 60 },
    { key: "Skill.React",        level: "Skill.Level3", percent: 60 },
    { key: "Skill.Python",       level: "Skill.Level1", percent: 20 },
    { key: "Skill.NetCoreMVC",   level: "Skill.Level1", percent: 20 },
    { key: "Skill.AngularJS",    level: "Skill.Level1", percent: 20 },
    { key: "Skill.ReactNative",  level: "Skill.Level1", percent: 20 },
  ];

  return (
    <Card className="resume-card">
      {skills.map(({ key, level, percent }) => (
        <Row key={key} align="middle">
          <Col span={nameSpan} className="col-center">
            <p>{_t(key)}</p>
          </Col>
          <Col span={levelSpan} className="col-center">
            <p>{_t(level)}</p>
          </Col>
          <Col span={progressSpan} className={progressClass}>
            <Progress percent={percent} strokeColor="#378752" showInfo={false} />
          </Col>
        </Row>
      ))}
    </Card>
  );
};

export default CardSkill;
