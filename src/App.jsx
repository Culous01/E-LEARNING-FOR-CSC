import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './RoutePages/Home';
import Login from './RoutePages/Login';
import SignUp from "./RoutePages/SignUp";
import Dashboard from "./RoutePages/Dashboard";
import PastQuestion from "./RoutePages/PastQuestion";
import { AuthProvider, useAuth } from "./Contexts/AuthContext";
import AdminDashboard from "./RoutePages/AdminDashboard";
import Quiz from "./RoutePages/Quiz";

function AppRoutes() {
  const { user, loading } = useAuth();

    if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-[rgb(26,46,86)] border-t-transparent rounded-full animate-spin"></div>
          
          <h2 className="mt-4 text-xl font-semibold text-gray-700">
            Loading...
          </h2>
        </div>
      </div>
    );
  }

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
      <Route path="/pastQuestion/:courseCode" element={user ? <PastQuestion /> : <Navigate to="/login" replace/> } />
      <Route path="/quiz/:courseCode" element={user ? <Quiz /> : <Navigate to="/login" replace/> } />
      <Route
        path="/adminDashboard"
        element={
          !user ? (
            <Navigate to="/login" replace />
          ) : user.role === "admin" ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/dashboard" replace />
          )
        }
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