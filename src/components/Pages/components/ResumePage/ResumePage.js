import Page from '../../../Page/Page';
import PageTitle from '../../../PageTitle/PageTitle';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import DesignSkills from './components/DesignSkills/DesignSkill';
import CodingSkills from './components/CodingSkill/CodingSkill';

import './ResumePage.css';

const ResumePage = ({ 
  active,
}) => (
  <Page 
    active={active}
    header={(<PageTitle>Resume</PageTitle>)}
  >
    <div className="resumePage__sub">
      <Education />
      <Experience />
    </div>
    <div className="resumePage__sub">
      <DesignSkills />
      <CodingSkills />
    </div>
  </Page>
);

export default ResumePage;
