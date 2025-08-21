import { Image } from "antd";
const picProfile = (import.meta.env.BASE_URL || "/") + "IMG/PicProfile.jpeg";
import ChangeLang from "./Components/ChangeLang";
import { useTranslation } from "react-i18next";
import {
  RiFacebookCircleFill,
  RiLineFill,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri";
import { DownloadOutlined } from "@ant-design/icons";
import PreviewResumeButton from "./Components/PreviewResumeButton";
import "./CSS/HeadPage.css";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";

const HeadPage = (props) => {
  const _translation = useTranslation();
  const _t = _translation.t;
  // ฟังก์ชันดาวน์โหลด PDF ตรงไฟล์
  const handleDownloadResume = () => {
    const lang = _translation.i18n.language;
    const base = import.meta.env.BASE_URL || "/";
    const fileName = lang === "th"
      ? "Resume Supakorn(TH).pdf"
      : "Resume Supakorn(EN).pdf";
    const url = base + fileName;
    // สร้างลิงก์ดาวน์โหลด
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="HeadPage">
      <div className="headpage-lang-end">
        <ChangeLang isMobile={props.isMobile} />
      </div>
      <div className="profile-section">
        <Image
          className={props.isMobile ? "Profile profile-mobile" : "Profile profile-desktop"}
          width={props.isMobile ? 120 : 180}
          src={picProfile}
          alt="Profile"
          preview={false}
        />
        <div className="profile-name">
          <h1>{_t("head.name")}</h1>
          <h2>{_t("head.job")}</h2>
          <button className="btn-green-resume" onClick={handleDownloadResume}>
            <DownloadOutlined className={props.isMobile ? "resume-icon-mobile" : "resume-icon-desktop"} />
            {_t("head.download")}
          </button>
          {/* <PreviewResumeButton lang={_translation.i18n.language} /> */}
        </div>
        <div className="contact-row">
          <div className="contact-item">
            <RiMailFill className="iconSocial" />
            <span>{_t("head.email")}</span>
          </div>
          <div className="contact-item">
            <RiPhoneFill className="iconSocial" />
            <span>{_t("head.phone")}</span>
          </div>
          <a
            className="contact-item"
            href="https://www.facebook.com/SKULLM00N"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RiFacebookCircleFill className="iconSocial icon-facebook" />
            <span>{_t("head.facebook")}</span>
          </a>
          <a
            className="contact-item"
            href="https://line.me/ti/p/G2KiH03-Q1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RiLineFill className="iconSocial icon-line" />
            <span>{_t("head.line")}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeadPage;
// ...existing code...
