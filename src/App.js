import './App.css';
import Home from './pages/Home/Home.js';
import 'antd/dist/antd.css';
import Footer from './pages/Footer/Footer';
import MobileBottomMenu from './components/MobileBottomMenu/MobileBottomMenu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShopPractice from './pages/Shop/ShopPractice.js';
import Shop from './pages/Shop/Shop.js';
import TopHeader from './components/Topheader/TopHeader';
import MainMenu from './components/MainMenu/MainMenu';
import CategoryMenu from './components/CategoryMenu/CategoryMenu';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Product from './pages/Product/Product';
import Orders from './pages/Orders/Orders';
import Profile from './pages/Profile/Profile';
import NewMobileBottom from './components/MobileBottomMenu/NewMobileBottom';
import MobileMenu2 from './components/MobileBottomMenu/MobileMenu2';
import ProfileMobile from './pages/Profile/ProfileMobile/ProfileMobile';
import BottomNavigationLabel from './components/BottomNavigation/BottomNavigationLabel';


function App() {
  
    return ( 
      <div className = "App" >
          {window.location.pathname !== '/profilemobile' ? (
                <div className="home__navsection">
                <div className="home__topmenu">
                    <TopHeader  />

                </div>
                <div className="home__mainmenu">
                    <MainMenu  />
                </div>
                <div className="home__categorymenu">
                    <CategoryMenu />
                </div>
                <div className="home__mobilemenu">
                    <MobileMenu className="mobile_menu_home" />
                </div>

            
        </div>
            ) : (
                <Router>
                    <Switch>
                        <Route exact path="/profilemobile">
                            <ProfileMobile />
                        </Route>
                     </Switch>  
                </Router>
                  
                
            
            ) }
        <Router>
            
        
        
            <Switch>
                <div className="main__section__container">
                    <Route exact path="/">
                    <Home />
                    </Route>
                    <Route exact path="/shoppractice">
                        <ShopPractice />
                    </Route>
                    <Route exact path="/shop">
                        <Shop />
                    </Route>
                    <Route exact path="/product/:productId" component={Product}>
                        
                    </Route>
                    <Route exact path="/orders">
                        <Orders />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/profilemobile">
                    <ProfileMobile />
                </Route>
                </div>
            
            </Switch>
        
        {/* top Component */}
          {/* Main Menu Header */}
          {/* Category Menu */}
          {/* Banners */}
          {/* Product Category tabs section With Slider  */}
          {/* Short Banners */}
        <Footer />
        
        <MobileBottomMenu className="mobileBottomMenu" />
        {/* <BottomNavigationLabel /> */}
        {/* <NewMobileBottom className="mobileBottomMenu" /> */}
        {/* <MobileMenu2 className="mobileBottomMenu" /> */}
        
        
        </Router>
        
      </div>
    );
}

export default App;