import React from "react";
import Nav from "../Nav/Nav";
import Pages from "../Pages/Pages";
import Footer from "../Footer/Footer";
import { PAGE } from "../../constants";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: PAGE.HOME,
      openMobileMenu: false,
    };

    this.changePage = this.changePage.bind(this);
    this.handleOpenNavBar = this.handleOpenNavBar.bind(this);
  }
  // // ES2017 sytax sugar
  // changePage = (pageName) => {
  //   this.setState({
  //     currentPage: pageName,
  //   });
  // }
  changePage(pageName) {
    this.setState({
      currentPage: pageName,
      openMobileMenu: false,
    });
    // console.log(pageName);
  }

  handleOpenNavBar() {
    this.setState({
      openMobileMenu: true,
    });
  }

  render() {
    const { currentPage, openMobileMenu } = this.state;

    return (
      <div className="app">
        <Nav
          currentPage={currentPage}
          openMobileMenu={openMobileMenu}
          handleOpenNavBar={this.handleOpenNavBar}
          changePage={this.changePage}
        />
        <div className="container">
          <Pages currentPage={currentPage} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
