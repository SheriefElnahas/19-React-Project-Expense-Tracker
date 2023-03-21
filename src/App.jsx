// React & Router
import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

// Context
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <React.Fragment>
      <Navbar />
      {authIsReady && (
        <>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="login" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </>
      )}
    </React.Fragment>
  );
}

export default App;
