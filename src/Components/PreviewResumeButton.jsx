import { EyeOutlined } from "@ant-design/icons";

const PreviewResumeButton = ({ lang }) => {
  // Path to resume html in public folder
  const fileName = lang === "th"
    ? "Resume Supakorn(TH).html"
    : "Resume Supakorn(EN).html";
  const url = `/${fileName}`;

  const handlePreview = () => {
    window.open(url, "_blank");
  };

  return (
    <button className="btn-blue-resume" onClick={handlePreview} style={{marginLeft:8}}>
      <EyeOutlined style={{fontSize:18, marginRight:4}} />
      Preview
    </button>
  );
};

export default PreviewResumeButton;
