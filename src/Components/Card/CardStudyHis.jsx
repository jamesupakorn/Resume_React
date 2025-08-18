import { Card, Timeline } from "antd";
import { BookOutlined } from "@ant-design/icons";
// ...existing code...
import { useTranslation } from "react-i18next";

const CardStudyHis = () => {
  const _translation = useTranslation();
  const _t = _translation.t;

  // Timeline data from user
  const timelineItems = [
    {
      color: "#7ed957",
      dot: <BookOutlined className="studyhis-dot-icon" />,
      label: <span className="studyhis-label">2551</span>,
  children: <div className="studyhis-timeline-box"><b>{_t("StudyHis.Primary")}</b> <span className="studyhis-school">{_t("StudyHis.SchoolPrimary")}</span></div>
    },
    {
      color: "#7ed957",
      dot: <BookOutlined className="studyhis-dot-icon" />,
      label: <span className="studyhis-label">2551-2554</span>,
  children: <div className="studyhis-timeline-box"><b>{_t("StudyHis.Junior")}</b> <span className="studyhis-school">{_t("StudyHis.SchoolJunior")}</span></div>
    },
    {
      color: "#7ed957",
      dot: <BookOutlined className="studyhis-dot-icon" />,
      label: <span className="studyhis-label">2554-2557</span>,
  children: <div className="studyhis-timeline-box"><b>{_t("StudyHis.Vocational")}</b><br /><span className="studyhis-school">{_t("StudyHis.SchoolVocational")}</span></div>
    },
    {
      color: "#7ed957",
      dot: <BookOutlined className="studyhis-dot-icon" />,
      label: <span className="studyhis-label">2557-2559</span>,
  children: <div className="studyhis-timeline-box"><b>{_t("StudyHis.HighVocational")}</b><br /><span className="studyhis-school">{_t("StudyHis.SchoolVocational")}</span></div>
    },
    {
      color: "#7ed957",
      dot: <BookOutlined className="studyhis-dot-icon" />,
      label: <span className="studyhis-label">2559-2561</span>,
  children: <div className="studyhis-timeline-box"><b>{_t("StudyHis.Bachelor")}</b><br /><span className="studyhis-school">{_t("StudyHis.SchoolBachelor")}</span></div>
    }
  ];
  return (
    <Card title={_t("Study")} className="resume-card">
  <Timeline className="studyhis-timeline" mode="left" items={timelineItems} style={{ marginLeft: 0 }} />
    </Card>
  );
};

export default CardStudyHis;
