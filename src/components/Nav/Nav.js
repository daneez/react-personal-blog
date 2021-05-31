import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import './Nav.css';
	// // Mobile menu
	// $('.menu-toggle').on("click", function () {
	// 	$('#site_nav').toggleClass('mobile-menu-hide');
	// });

	// // Hide Mobile menu
	// function mobileMenuHide() {
	// 	var windowWidth = $(window).width();
	// 	if (windowWidth < 1024) {
	// 		$('#site_nav').addClass('mobile-menu-hide');
	// 	}
	// }

	// // Mobile menu hide on main menu item click
	// $('.site-main-menu').on("click", "a", function (e) {
	// 	mobileMenuHide();
	// });
const Nav = ({currentPage, changePage, handleOpenNavBar, openMobileMenu}) => (
  <header className="nav">
    <div className="nav__left">
      <Logo />
    </div>
    <div className="nav__right" id="site_nav">
      <Navbar currentPage={currentPage} changePage={changePage} openMobileMenu={openMobileMenu}/>
    </div>
    <button className="menu-toggle mobile-visible">
      <i className="fa fa-bars" onClick={()=> handleOpenNavBar()}></i>
    </button>
  </header>
);

export default Nav;
