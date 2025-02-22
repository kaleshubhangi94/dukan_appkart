import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './pages/Register';
import Dashboard from './components/Form/Dashboard';
import Summary from './components/summary/Summary'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/summary" element={< Summary/>} />

          <Route path="/register" element={<Register />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
