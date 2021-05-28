import Page from "../../../Page/Page";
import Tagline from "./components/Tagline/Tagline";
// import AboutMe from './components/AboutMe/AboutMe';
// import ContactTable from './components/ContactTable/ContactTable';
import MyBlog from "./components/MyBlog/MyBlog";
import homepageImg from "./assets/simplicity.jpg";
import "./HomePage.css";

const HomePage = ({ active }) => (
  <Page
    active={active}
    header={
      <div className="homepage__header">
        <img
          alt="homepageImg"
          src={homepageImg}
          className="homepage__header-img"
        ></img>
      </div>
    }
  >
    <div className="homepage__middle-content">
      <Tagline />
      <MyBlog />
    </div>
    <div className="homepage__bottom-content">
      {/* <AboutMe /> */}
      {/* <ContactTable /> */}
    </div>
  </Page>
);

export default HomePage;
