import Page from '../../../Page/Page';
import PageTitle from '../../../PageTitle/PageTitle';
import HtmlLogo from './assets/html5.png';
import CSSLogo from './assets/css3.png';
import JSLogo from './assets/js.png';
import JRLogo from './assets/jr-academy.png';
import MelbLogo from './assets/melbris.png';
import AWLogo from './assets/async.svg';
import web_dev from './assets/web_dev.png';
import project_mgt from './assets/project_mgt.png';
import data_admin from './assets/data_admin.png';

import './ServicesPage.css';

const ServicesPage = ({
  active,
}) => (
  <Page 
    active={active}
    header={(<PageTitle>Services</PageTitle>)}
  >
    <div className="servicesPage__services">
      <h3 className="services__title">
        My
        <span className="services__titleHightLight"> Services</span>
      </h3>
      <div className="services">
        <div className="serviceItem">
          <div className="serviceItem__imageContainer">
            <img alt="HTML5" src={HtmlLogo} className="serviceItem__image"></img>
          </div>
          <h4 className="serviceItem__name">HTML5</h4>
        </div>
        <div className="serviceItem">
          <div className="serviceItem__imageContainer">
            <img alt="CSS3" src={CSSLogo} className="serviceItem__image"></img>
          </div>
          <h4 className="serviceItem__name">CSS3</h4>
        </div>
        <div className="serviceItem">
          <div className="serviceItem__imageContainer">
            <img alt="JavaScript" src={JSLogo} className="serviceItem__image"></img>
          </div>
          <h4 className="serviceItem__name">JavaScript</h4>
        </div>
      </div>
      <div className="services">
        <div className="serviceItem">
          <div className="serviceItem__imageContainer">
            <img alt="WebDevelopment" src={web_dev} className="serviceItem__image"></img>
          </div>
          <h4 className="serviceItem__name">Web Development</h4>
        </div>
        <div className="serviceItem">
          <div className="serviceItem__imageContainer">
            <img alt="ProjectManagement" src={project_mgt} className="serviceItem__image"></img>
          </div>
          <h4 className="serviceItem__name">Project Management</h4>
        </div>
        <div className="serviceItem">
          <div className="serviceItem__imageContainer">
            <img alt="DB administration" src={data_admin} className="serviceItem__image"></img>
          </div>
          <h4 className="serviceItem__name">Database Administration</h4>
        </div>
      </div>
    </div>
    <div className="servicesPage__clients">
      <h3 className="services__title">
        Clients
      </h3>
      <div className="clients">
        <img alt="JR Academy" src={JRLogo} className="clientItem"></img>
        <img alt="Melbrisade" src={MelbLogo} className="clientItem"></img>
        <img alt="Async Working" src={AWLogo} className="clientItem"></img>
      </div>
    </div>
  </Page>
);

export default ServicesPage;
