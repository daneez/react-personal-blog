import { PAGE } from "../../../../constants";
import Item from "./components/Item/Item";
import "./Navbar.css";

const ITEMS = [
  {
    key: PAGE.HOME,
    text: "Home",
  },
  {
    key: PAGE.RESUME,
    text: "Resume",
  },
  {
    key: PAGE.SERVICES,
    text: "Service",
  },
  {
    key: PAGE.PORTFOLIOS,
    text: "Portfolio",
  },
];

const Navbar = ({ currentPage, changePage, openMobileMenu }) => {
  let className= 'navbar';
  if(!openMobileMenu) {
    className += ' mobile-hidden';
  }
  return (
    <div className={className}>
      {ITEMS.map((item) => (
        <Item
          key={item.key}
          active={currentPage === item.key}
          onClick={() => changePage(item.key)}
          //strict mode caller is undefined, non-strict mode is window
          //webpack bundle result is strict mode
        >
          {item.text}
        </Item>
      ))}
    </div>
  )
}

export default Navbar;
