import CardPersonal from "./Card/CardPersonal";

const Personal = (props) => {
  return (
    <div>
      <CardPersonal isMobile={props.isMobile} />
    </div>
  );
};

export default Personal;
