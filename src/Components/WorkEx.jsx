// ...existing code...
import "../CSS/Body.css";
import CardWorkEx from "./Card/CardWorkEx";

const WorkEx = (props) => {
  return (
    <div className="Personal body">
      <CardWorkEx isMobile={props.isMobile} />
      <br />
    </div>
  );
};

export default WorkEx;
