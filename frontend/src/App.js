import './App.css';
import HeaderVan from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes/routes';
import Home from './pages/home/Home';
import { useState } from 'react';

function App() {
  const [home] = useState();
  const [searchExperience, setSearchExperience] = useState('');
  const [searchCity, setSearchCity] = useState('');

  return (
    <Router>
      <div className="App">
        <HeaderVan />

        <Switch>
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
