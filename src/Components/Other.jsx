// ...existing code...
import "../CSS/Body.css";
import CardSkill from "./Card/CardSkill";

const Other = (props) => {
  return (
    <div className="Other body">
      <CardSkill isMobile={props.isMobile} />
    </div>
  );
};

export default Other;
