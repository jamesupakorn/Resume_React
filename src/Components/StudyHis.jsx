// ...existing code...
import "../CSS/Body.css";
import CardStudyHis from "./Card/CardStudyHis";

const StudyHis = (props) => {
  return (
    <div className="Personal body">
      <CardStudyHis isMobile={props.isMobile} />
      <br />
    </div>
  );
};

export default StudyHis;
