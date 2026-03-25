import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
// 1. IMPORTANTE: Importe a sua tela de VerifyEmail (ajuste o caminho se necessário)
import VerifyEmail from './pages/VerifyEmail/VerifyEmail'; 
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem('token'),
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <Login setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/forgot-password"
          element={
            !isLoggedIn ? <ForgotPassword /> : <Navigate to="/" replace />
          }
        />

        <Route path="/reset-password" element={<ResetPassword />} />

        {/* 2. A ROTA NOVA PARA O LINK DO E-MAIL BATER AQUI */}
        <Route path="/confirm-email" element={<VerifyEmail />} />

        {/* Catch-all (Coringa) - Sempre deve ficar por último */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;