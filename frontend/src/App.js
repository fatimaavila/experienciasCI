import './App.css';
import MainHeader from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes/routes';
import Home from './pages/home/Home';
import { useState } from 'react';
import UniqueExperiece from './pages/uniqueExperience/UniqueExperience';

function App() {
  const [home] = useState();

  return (
    <Router>
      <div className="App">
        <MainHeader />

        <Switch>
          <Route path="/experience/:idExp">
            <UniqueExperiece />
          </Route>
          {routes.map((route) => (
            <Route key={route.path} path={route.path}>
              <route.Page />
            </Route>
          ))}
          {home && <Home />}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
