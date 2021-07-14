import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes/routes';
import Home from './pages/home/Home';
import { useState } from 'react';

function App() {
  const [home] = useState();

  return (
    <Router>
      <div className="App">
        <Header />
      </div>

      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path}>
            <route.Page />
          </Route>
        ))}
      </Switch>

      {home && <Home />}

      <Footer />
    </Router>
  );
}

export default App;
