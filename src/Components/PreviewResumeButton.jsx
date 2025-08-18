import { EyeOutlined } from "@ant-design/icons";

const PreviewResumeButton = ({ lang }) => {
  // Path to resume html in public folder
  const base = import.meta.env.BASE_URL || "/";
  const fileName = lang === "th"
    ? "Resume Supakorn(TH).html"
    : "Resume Supakorn(EN).html";
<<<<<<< HEAD
  const url = `${base}${fileName}`;
=======
  const url = `/Resume_React/${fileName}`;
>>>>>>> 295971bb0d828fb6bb8e50a4c0a7b8e158046dfb

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
