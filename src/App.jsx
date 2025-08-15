import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './RoutePages/Home';
import Login from './RoutePages/Login';
import SignUp from "./RoutePages/SignUp";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>

    </>

  )
}

export default App
