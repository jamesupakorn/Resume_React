import { EyeOutlined } from "@ant-design/icons";

const PreviewResumeButton = ({ lang }) => {
  // Path to resume html in public folder
  const base = import.meta.env.BASE_URL || "/";
  const fileName = lang === "th"
    ? "Supakorn CV (Thai).pdf"
    : "Supakorn CV (English).pdf";
  const url = `${base}${fileName}`;

  const handlePreview = () => {
    window.open(url, "_blank");
  };

  return (
    <button className="btn-blue-resume" onClick={handlePreview} style={{marginLeft:8}}>
      <EyeOutlined style={{fontSize:18, marginRight:4}} />
      Preview PDF
    </button>
  );
};

export default PreviewResumeButton;
