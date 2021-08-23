import Page from '../../../Page/Page';
import PageTitle from '../../../PageTitle/PageTitle';
import HtmlLogo from './assets/html5.png';
import CSSLogo from './assets/css3.png';
import JSLogo from './assets/js.png';
import JRLogo from './assets/jr-academy.png';
import NeusoftLogo from './assets/neusoft.png';
import AWLogo from './assets/async.svg';
import web_dev from './assets/web_dev.png';
import project_mgt from './assets/project_mgt.png';
import data_admin from './assets/data_admin.png';

import './ServicesPage.css';

const SERVICES = [{
  key: 'html',
  src: HtmlLogo,
  name: 'HTML5'
}, {
  key: 'css',
  src: CSSLogo,
  name: 'CSS3'
}, {
  key: 'js',
  src: JSLogo,
  name: 'JavaScript'
}, {
  key: 'webDev',
  src: web_dev,
  name: 'Web Development'
},
{
  key: 'projectMgt',
  src: project_mgt,
  name: 'Project Management'
},  {
  key: 'dataAdmin',
  src: data_admin,
  name: 'Database Administration    '
}]

const CLIENTS = [{
  key: 'neusfot',
  src: NeusoftLogo,
  name: 'Neusoft',
}, {
  key: 'jracademy',
  src: JRLogo,
  name: 'JR Academy',
}, {
  key: 'aw',
  src: AWLogo,
  name: 'Async Working',
}]

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
      {SERVICES.map(({key, src, name}) => (
        <div className="serviceItem" key={key}>
          <div className="serviceItem__imageContainer">
            <img alt="HTML5" src={src} className="serviceItem__image"></img>
          </div>
          <h4 className="serviceItem__name">{name}</h4>
        </div>
      ))}
      </div>
    </div>
    <div className="servicesPage__clients">
      <h3 className="services__title">
        Clients
      </h3>
      <div className="clients">
        {CLIENTS.map(({key, src, name}) => (
          <img key={key} alt={name}  src={src} className="clientItem"></img>
        ))}
      </div>
    </div>
  </Page>
);

export default ServicesPage;
