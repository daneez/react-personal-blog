import SkillBar from "../SkillBar/SkillBar";

const DesignSkill = () => (
  <div>
  <h3 className="resumeSub__title">Design <span className="resumeSub__titleHighlight">Skills</span></h3>
  <SkillBar
    items={[
      {
        key: "0",
        title: "Web Design",
        level: "webDesign"
      },
      {
        key: "1",
        title: "Graphic Design",
        level: "graphicDesign"
      },
      {
        key: "2",
        title: "Print Design",
        level: "printDesign"
      }
    ]} />
</div>
);

export default DesignSkill;