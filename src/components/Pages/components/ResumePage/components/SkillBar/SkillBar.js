import './SkillBar.css';

const SkillBar = ({ items }) => (
  <div className="skills">
    {items.map(({ key, title, level }) => {
      let className = "skill__level skill__level--"+level;
      return (
        <div className="skill" key={key}>
          <h4 className="skill__title">{title}</h4>
          <div className={className}></div>
        </div>
      )
    })}
  </div>
);

export default SkillBar;
