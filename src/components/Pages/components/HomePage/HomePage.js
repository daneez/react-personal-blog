import Page from '../../../Page/Page';
import Tagline from './components/Tagline/Tagline';
import AboutMe from './components/AboutMe/AboutMe';
import ContactTable from './components/ContactTable/ContactTable';
import './HomePage.css';

const HomePage = ({
  active,
}) => (
  <Page
    active={active}
    header={(
      <div className="homepage__header">
        <Tagline />
      </div>
    )}
  >
    <div className="homepage__content">
      <AboutMe />
      <ContactTable />
    </div>
  </Page>
);

export default HomePage;
