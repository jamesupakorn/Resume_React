import { Card, Timeline, Modal, Button } from "antd";
import { SolutionOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const workExData = [
  {
    year: "WorkEx.Year1",
    company: "WorkEx.Company1",
    position: "WorkEx.Position1",
    detail: "WorkEx.Responsibility1"
  },
  {
    year: "WorkEx.Year2",
    company: "WorkEx.Company2",
    position: "WorkEx.Position2",
    detail: "WorkEx.Responsibility2"
  },
  {
    year: "WorkEx.Year3",
    company: "WorkEx.Company3",
    position: "WorkEx.Position3",
    detail: "WorkEx.Responsibility3"
  },
  {
    year: "WorkEx.Year4",
    company: "WorkEx.Company4",
    position: "WorkEx.Position4",
    detail: "WorkEx.Responsibility4"
  },
  {
    year: "WorkEx.Year5",
    company: "WorkEx.Company5",
    position: "WorkEx.Position5",
    detail: "WorkEx.Responsibility5"
  },
  {
    year: "WorkEx.Year6",
    company: "WorkEx.Company6",
    position: "WorkEx.Position6",
    detail: "WorkEx.Responsibility6"
  }
];

const CardWorkEx = () => {
  const _translation = useTranslation();
  const _t = _translation.t;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleShowDetail = (item) => {
    setModalContent(item);
    setModalOpen(true);
  };

  const timelineItems = workExData.map((item, idx) => ({
    color: "#7ed957",
    dot: <SolutionOutlined className="workex-dot-icon" />, 
    children: (
      <div
        className="workex-timeline-box workex-timeline-box-clickable"
        onClick={() => handleShowDetail(item)}
        tabIndex={0}
        role="button"
        aria-label={_t("WorkEx.DetailBtn")}
      >
        <div className="workex-row">
          <span className="workex-label">{_t(item.year)}</span>
          <span className="workex-school">{_t(item.company)}</span>
        </div>
        <div className="workex-row workex-row-between">
          <b>{_t(item.position)}</b>
          <span className="workex-detail-btn-text">{_t("WorkEx.DetailBtn")}</span>
        </div>
      </div>
    )
  }));

  return (
    <>
      <Card title={_t("tabs.Work") || "Work Experience"} className="resume-card">
        <Timeline className="workex-timeline" mode="left" items={timelineItems} />
      </Card>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        centered
        title={modalContent.position ? `${_t(modalContent.position)} @ ${_t(modalContent.company)}` : ""}
        className="workex-modal"
      >
      <br />
        <div style={{ fontSize: '1.08rem', color: '#35524a', lineHeight: 1.7 }}>
          {(() => {
            const desc = _t(modalContent.detail || "");
            // แยกแต่ละหัวข้อย่อยที่ขึ้นต้นด้วย - ออกมาเป็นบรรทัดใหม่ พร้อม tab
            return desc.split(/-\s+/).map((item, idx) =>
              idx === 0 && !desc.trim().startsWith('-') ? (
                <span key={idx}>{item.trim()}</span>
              ) : (
                <div key={idx} style={{ textIndent: '2em', marginTop: 4 }}>
                  - {item.trim()}
                </div>
              )
            );
          })()}
        </div>
      </Modal>
    </>
  );
};

export default CardWorkEx;
