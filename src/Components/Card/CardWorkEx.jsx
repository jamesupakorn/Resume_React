import { Card, Timeline, Modal } from "antd";
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

const renderDescription = (desc) =>
  desc
    .split(/\n/)
    .map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith("-")) {
        return <div key={idx} className="workex-desc-bullet">{trimmed}</div>;
      }
      return <div key={idx} className="workex-desc-line">{trimmed}</div>;
    })
    .filter(Boolean);

const CardWorkEx = () => {
  const _translation = useTranslation();
  const _t = _translation.t;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleShowDetail = (item) => {
    setModalContent(item);
    setModalOpen(true);
  };

  const timelineItems = workExData.map((item) => ({
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
      <Card className="resume-card">
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
        <div className="workex-modal-body">
          {renderDescription(_t(modalContent.detail || ""))}
        </div>
      </Modal>
    </>
  );
};

export default CardWorkEx;
