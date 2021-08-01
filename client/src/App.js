import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/Auth.Context';
import { NaviBar } from './components/NaviBar';
import { Loader } from './components/Loader';
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const {token, login, logout, userId, ready} = useAuth();
  const isAuthenticated = !!token;//boolean
  const routes = useRoutes(isAuthenticated);

if (!ready) {
  return <Loader />
}

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        <NaviBar />
        <div className="container">
          {routes}
        </div>
      </Router>
      <Footer />
    </AuthContext.Provider>
  )
}

export default App;
