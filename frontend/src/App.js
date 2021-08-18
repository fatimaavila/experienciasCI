import './App.css';
import MainHeader from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes/routes';
import Home from './pages/home/Home';
import { useState } from 'react';
import ScrollToTop from 'react-scroll-up';
import ScrollToTopRouter from './components/ScrollTopRouter/ScrollTopRouter';
import { BsArrowUpShort } from 'react-icons/bs';

function App() {
  const [home] = useState();

  return (
    <Router>
      <div className="App">
        <ScrollToTopRouter />
        <MainHeader />
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path}>
              <route.Page />
            </Route>
          ))}
          {home && <Home />}
        </Switch>
        <Footer />
        <ScrollToTop showUnder={200} duration={150} easing={'easeInOutQuart'}>
          <div className="scrollUp_Box">
            <BsArrowUpShort size="50px" color="#FFF" />
          </div>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
