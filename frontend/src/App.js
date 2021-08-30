import './App.css';
import MainHeader from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes/routes';
import Home from './pages/home/Home';
import { useState } from 'react';
import ScrollToTopRouter from './components/ScrollTopRouter/ScrollTopRouter';
import AutoScrollToTop from './components/AutoScrollToTop/AutoScrollToTop';

function App() {
  const [home] = useState();
  const [scrollBtn, setScrollBtn] = useState(false);

  function handleScroll() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setScrollBtn(true);
    } else if (scrolled <= 200) {
      setScrollBtn(false);
    }

    if (scrolled > 90) {
      const header = document.querySelector('header');
      header.style.cssText = `
        position: fixed;
        top: 0;
        box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
        margin-bottom: 300px;
        z-index: 9999;
      `;
    } else if (scrolled <= 90) {
      const header = document.querySelector('header');
      header.style.cssText = `
        position: static;
      `;
    }
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <Router>
      <div className="App posRel">
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
        {scrollBtn && <AutoScrollToTop />}
      </div>
    </Router>
  );
}

export default App;
