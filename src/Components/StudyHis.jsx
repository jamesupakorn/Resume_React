import CardStudyHis from "./Card/CardStudyHis";

const StudyHis = (props) => {
  return (
    <div>
      <CardStudyHis isMobile={props.isMobile} />
    </div>
  );
};

export default StudyHis;
