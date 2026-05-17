import { Card, Timeline } from "antd";
import { BookOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const studyData = [
  { yearKey: "StudyHis.Year1", levelKey: "StudyHis.Primary", schoolKey: "StudyHis.SchoolPrimary" },
  { yearKey: "StudyHis.Year2", levelKey: "StudyHis.Junior",   schoolKey: "StudyHis.SchoolJunior" },
  { yearKey: "StudyHis.Year3", levelKey: "StudyHis.Vocational",     schoolKey: "StudyHis.SchoolVocational" },
  { yearKey: "StudyHis.Year4", levelKey: "StudyHis.HighVocational", schoolKey: "StudyHis.SchoolVocational" },
  { yearKey: "StudyHis.Year5", levelKey: "StudyHis.Bachelor",       schoolKey: "StudyHis.SchoolBachelor" },
];

const CardStudyHis = () => {
  const _translation = useTranslation();
  const _t = _translation.t;

  const timelineItems = studyData.map(({ yearKey, levelKey, schoolKey }) => ({
    color: "#7ed957",
    dot: <BookOutlined className="studyhis-dot-icon" />,
    label: <span className="studyhis-label">{_t(yearKey)}</span>,
    children: (
      <div className="studyhis-timeline-box">
        <b>{_t(levelKey)}</b>
        <span className="studyhis-school">{_t(schoolKey)}</span>
      </div>
    ),
  }));

  return (
    <Card className="resume-card">
      <Timeline className="studyhis-timeline" mode="left" items={timelineItems} />
    </Card>
  );
};

export default CardStudyHis;
