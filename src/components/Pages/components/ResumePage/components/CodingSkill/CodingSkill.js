import SkillBar from "../SkillBar/SkillBar";

const CodingSkill = () => (
  <div>
  <h3 className="resumeSub__title">Coding <span className="resumeSub__titleHighlight">Skills</span></h3>
  <SkillBar
    items={[
      {
        key: "0",
        title: "HTML Design",
        level: "htmlDesign"
      },
      {
        key: "1",
        title: "CSS Design",
        level: "cssDesign"
      },
      {
        key: "2",
        title: "JavaScript Design",
        level: "jsDesign"
      }
    ]} />
</div>
);

export default CodingSkill;