// ...existing code...
import "../CSS/Body.css";
import CardPersonal from "./Card/CardPersonal";

const Personal = (props) => {
  return (
    <div className="Personal body">
      <CardPersonal isMobile={props.isMobile} />
    </div>
  );
};

export default Personal;
