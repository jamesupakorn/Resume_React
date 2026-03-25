import {
  UserOutlined,
  ReadOutlined,
  SolutionOutlined,
  StarOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
// ...existing code...
import { useTranslation } from "react-i18next";
import "./CSS/styles.css";
import "./CSS/App.css";
import HeadPage from "./HeadPage";
import "./i18n";
import useIsMobile from "./Components/useIsMobile";
import ScrollButton from "./Components/BtnScrollUp";

import Personal from "./Components/Personal";
import StudyHis from "./Components/StudyHis";
import WorkEx from "./Components/WorkEx";
import Other from "./Components/Other";
import Chatbot from "./Components/Chatbot";
import Resume3D from "./Components/Resume3D";
import "./CSS/Chatbot.css";
import "./CSS/ChatbotAvatarFix.css";

export default function App() {
  const _translation = useTranslation();
  const _t = _translation.t;
  // ฟังก์ชันดาวน์โหลด resume (สมมติไฟล์ public/resume.pdf)
  const handleDownload = () => {
    window.open("/public/resume.pdf", "_blank");
  };
  const isMobile = useIsMobile();
  return (
    <div className="App">
      <HeadPage isMobile={isMobile} />
      {/* Interactive Resume 3D Section */}
      <div id="section-interactive-resume" className="section-margin">
        <div className="section-card section-interactive-resume">
          <h2 className="section-header">
            <StarOutlined className="section-icon" />
            Interactive Resume 3D
          </h2>
          <Resume3D />
        </div>
      </div>
      {/* Personal Section */}
      <div id="section-personal" className="section-margin">
        <div className="section-card section-personal">
          <h2 className="section-header">
            <UserOutlined className="section-icon" />
            {_t("Personal.Personal")}
          </h2>
          <Personal isMobile={isMobile} />
        </div>
      </div>
      {/* Study History Section */}
      <div id="section-education" className="section-margin">
        <div className="section-card section-education">
          <h2 className="section-header">
            <ReadOutlined className="section-icon" />
            {_t("tabs.Study")}
          </h2>
          <StudyHis isMobile={isMobile} />
        </div>
      </div>
      {/* Section Divider */}
      <div className="section-divider" />
      {/* Work Experience Section */}
      <div id="section-work" className="section-margin">
        <div className="section-card section-work">
          <h2 className="section-header">
            <SolutionOutlined className="section-icon" />
            {_t("tabs.Work")}
          </h2>
          <WorkEx isMobile={isMobile} />
        </div>
      </div>
      {/* Section Divider */}
      <div className="section-divider" />
      {/* Other Section */}
      <div id="section-other" className="section-margin">
        <div className="section-card section-other">
          <h2 className="section-header">
            <StarOutlined className="section-icon" />
            {_t("tabs.Other")}
          </h2>
          <Other isMobile={isMobile} />
        </div>
      </div>
      {/* Quick Nav Floating Button */}
      <ScrollButton />
      {/* Chatbot floating box */}
      <Chatbot />
    </div>
  );
}
