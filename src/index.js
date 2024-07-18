import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import TenantList from './components/TenantList';
import AddTenant from './components/AddTenant';
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001'; // Définir la base URL pour Axios

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/login" element={<Login />} />
        <Route path="/tenants" element={<TenantList />} />
        <Route path="/add-tenant" element={<AddTenant />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
