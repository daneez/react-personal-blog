import Page from "../../../Page/Page";
import PageTitle from "../../../PageTitle/PageTitle";
import "./PortfolioPage.css";

const PortfolioPage = ({ active }) => (
  <Page active={active} header={<PageTitle>Portfolio</PageTitle>}>
    <div className="portfolio__header"></div>
    <div className="portfolio__content"></div>
  </Page>
);

export default PortfolioPage;
