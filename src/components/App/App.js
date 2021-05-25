import React from 'react';
import Nav from  '../Nav/Nav';
import Pages from '../Pages/Pages';
import Footer from '../Footer/Footer';
import { PAGE } from '../../constants';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state ={
      currentPage: PAGE.HOME,
    };

    this.changePage = this.changePage.bind(this);
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
    });
    console.log(pageName);
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div className="app">
        <div className="container">
          <Nav currentPage={currentPage} changePage={this.changePage} />
          <Pages currentPage={currentPage} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
