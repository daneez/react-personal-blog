import HomePage from './components/HomePage/HomePage';
import ResumePage from './components/ResumePage/ResumePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import { PAGE } from '../../constants';
import './Pages.css';

const Pages = ({currentPage}) => (
  <div className="pages">
    <HomePage active={currentPage === PAGE.HOME}/>
    <ResumePage active={currentPage === PAGE.RESUME} />
    <ServicesPage active={currentPage === PAGE.SERVICES}/>
    <div id="BLOG" className="page"></div>
    <div id="CONTACT" className="page"></div>
  </div>
);

export default Pages;
