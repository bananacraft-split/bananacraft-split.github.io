import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MenuBar from './MenuBar';
import './minecraft.css'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './GeneralMod/Home';
import RouteHelper from './RouteHelper';
import ItemPage from './GeneralMod/ItemPage';
import { Alert } from 'react-bootstrap';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuBar />
    <Alert variant="info">For the time being, The GamerJ57 mod page will be displaying information from a test mod designed to test this wiki's system</Alert>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/mod/:mod/" element={<RouteHelper element={Home}/>} />
        <Route path="/:mod/data/" element={<RouteHelper element={Home}/>} />
        <Route path="/mod/:mod/item/:item" element={<RouteHelper element={ItemPage}/>} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);