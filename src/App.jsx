import React from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './RoutePages/Home';
import Login from './RoutePages/Login';
import SignUp from "./RoutePages/SignUp";
import Dashboard from "./RoutePages/Dashboard";
import { AuthProvider, useAuth } from "./Contexts/AuthContext";

function AppRoutes() {
  const { user, userProfile } = useAuth();

  useEffect(() => {
    userProfile();
    console.log("Current user:", user);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/login" 
        element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
      />
      <Route 
        path="/signup" 
        element={user ? <Navigate to="/dashboard" replace /> : <SignUp />} 
      />
      <Route 
        path="/dashboard" 
        element={user ? <Dashboard /> : <Navigate to="/login" replace />} 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </AuthProvider>
  );
}

export default App;